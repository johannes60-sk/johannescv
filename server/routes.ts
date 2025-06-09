import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully!", id: message.id });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid input data", 
          errors: error.errors 
        });
      } else {
        console.error("Error saving contact message:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // CV download endpoint
  app.get("/api/cv/download", (req, res) => {
    try {
      // In a real application, you would serve the actual CV file
      // For now, we'll create a simple response or redirect to a CV file
      const cvPath = path.join(process.cwd(), "attached_assets", "Sarcelle Graphisme CV_1749508170952.pdf");
      
      // Set appropriate headers for file download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Johannes_Houenou_CV.pdf"');
      
      // For now, we'll send a simple response since the actual PDF parsing would require additional libraries
      // In production, you would use res.sendFile(cvPath) if the file exists
      res.status(200).send("CV download functionality - PDF file would be served here");
    } catch (error) {
      console.error("Error serving CV:", error);
      res.status(500).json({ message: "Error downloading CV" });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ message: "Error fetching messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

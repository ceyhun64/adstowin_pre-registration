// models/PreRegistration.ts
import mongoose, { Schema, model, models } from "mongoose";

export interface IPreRegistration {
  email: string;
  userType: "business" | "earner";
  registeredAt: Date;
  status: "pending" | "contacted" | "converted";
  ipAddress?: string;
  userAgent?: string;
}

const PreRegistrationSchema = new Schema<IPreRegistration>(
  {
    email: {
      type: String,
      required: [true, "E-posta adresi gereklidir"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Geçerli bir e-posta adresi giriniz",
      ],
    },
    userType: {
      type: String,
      required: [true, "Kullanıcı tipi gereklidir"],
      enum: {
        values: ["business", "earner"],
        message: "Kullanıcı tipi 'business' veya 'earner' olmalıdır",
      },
    },
    registeredAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["pending", "contacted", "converted"],
      default: "pending",
    },
    ipAddress: {
      type: String,
      required: false,
    },
    userAgent: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
PreRegistrationSchema.index({ email: 1 });
PreRegistrationSchema.index({ userType: 1 });
PreRegistrationSchema.index({ registeredAt: -1 });

const PreRegistration =
  models.PreRegistration ||
  model<IPreRegistration>("PreRegistration", PreRegistrationSchema);

export default PreRegistration;

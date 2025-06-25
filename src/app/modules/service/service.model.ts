import { model, Schema } from 'mongoose';
import { IService } from './service.interface';

const serviceSchema = new Schema<IService>(
  {
    title: { type: String, required: true, trim: true },
    shortDescription: { type: String, required: true, trim: true },
    isDeleted: {type: Boolean, default: false}
  },
  {
    timestamps: true,
  }
);

export const Service = model<IService>('Service', serviceSchema);

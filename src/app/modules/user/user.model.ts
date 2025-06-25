import { model, Schema } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    isDeleted: { type: Boolean, default: false }, // For soft delete
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

userSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});

// user find by email with static method
userSchema.statics.isUserExitsByEmail = async function (email: string) {
  return await User.findOne({ email }).select("+password");
};

// user password match checkin with static method
userSchema.statics.isPasswordMatched = async function (
  planeTextPassword,
  hashedPassword
) {
  return await bcrypt.compare(planeTextPassword, hashedPassword);
};

export const User = model<IUser, UserModel>('User', userSchema);

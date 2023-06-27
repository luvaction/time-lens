// src/entities/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // 'users' is the name of the table in the database
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  username: string;

  @Column()
  password: string;
}

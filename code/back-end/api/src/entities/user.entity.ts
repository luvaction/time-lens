// src/entities/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // 'users' is the name of the table in the database
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  user_id: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  nickname: string;

  @Column({ 
    type: "enum", 
    enum: ['male', 'female', 'other'], 
    default: 'other'
  })
  sex: string;

  @Column({ length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  address: string;
}

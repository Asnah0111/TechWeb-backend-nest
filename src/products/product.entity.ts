import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  imageUrl: string;

  @Column()
  description: string;
}

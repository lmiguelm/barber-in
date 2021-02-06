import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import Order from './Order';

@Entity('users') 
export default class User {

  @PrimaryGeneratedColumn('uuid')
  id: String;
  
  @Column()
  name: String;
  
  @Column()
  last_name: String;

  @Column()
  email: String;

  @Column()
  password: String;

  @OneToMany(() => Order, order => order.user, {
    cascade: ['update', 'insert', 'remove']
  })
  @JoinColumn({ name: 'order_id' })
  orders: Order[];
}
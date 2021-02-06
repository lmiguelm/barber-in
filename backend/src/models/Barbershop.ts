import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Address from './Address';
import Menu from './Menu';
import Order from './Order';
import Schedule from './Schedule';

@Entity('barbershops')
export default class Barbershop {

  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  name: String;

  @Column()
  description: String;

  @Column()
  whatsapp: String;

  @Column()
  telephone: String;

  @Column()
  email: String;

  @Column()
  password: String;

  @Column()
  open_day: String;

  @Column()
  close_day: String;

  @OneToMany(() => Schedule, schedule => schedule.barbershop, {
    cascade: ['insert', 'remove', 'update'] 
  })
  @JoinColumn({ name: 'schedule_id' })
  schedules: Schedule[];

  @OneToMany(() => Address, address => address.barbershop, {
    cascade: ['update', 'insert', 'remove']
  })
  @JoinColumn({ name: 'address_id' })
  adresses: Address[];

  @OneToMany(() => Menu, menu => menu.barbershop, {
    cascade: ['update', 'insert', 'remove']
  })
  @JoinColumn({ name: 'menu_id' })
  menus: Menu[];

  @OneToMany(() => Order, order => order.barbershop, {
    cascade: ['update', 'insert', 'remove']
  })
  @JoinColumn({ name: 'order_id' })
  orders: Order[];
}
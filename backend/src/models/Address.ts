import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Barbershop from './Barbershop';

@Entity('address')
export default class Address {

  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  latitude: String;

  @Column()
  longitude: String;

  @ManyToOne(() => Barbershop, barbershop => barbershop.adresses)
  @JoinColumn({ name: 'barbershop_id' })
  barbershop: Barbershop;
}
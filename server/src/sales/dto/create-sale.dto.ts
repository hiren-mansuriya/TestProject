import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

enum PaymentStatus {
    Pending = 'Pending',
    Completed = 'Completed',
  }

enum OrderStatus {
    AwaitingFulfillment = 'AwaitingFulfillment',
    AwaitingShipment = 'AwaitingShipment',
    AwaitingPickup = 'AwaitingPickup',
    Completed = 'Completed',
    Shipped = 'Shipped',
    Cancelled = 'Cancelled',
  }

export class CreateSaleDto {
    @ApiProperty({required: true, type: String})
    @IsNotEmpty({ message: 'orderId is missing' })
    @IsString()
    orderId?: string;
    //orderId field reference from  orders table

    @ApiProperty({required: true, type: String})
    @IsNotEmpty({ message: 'addressId is missing' })
    @IsString()
    addressId?: string;
    //addressId field reference from  address table

    @IsEnum(PaymentStatus)
    @ApiProperty({required: true})
    @IsNotEmpty({ message: 'orderId is missing' })
    paymentStatus?: PaymentStatus;
    //paymentStatus field have two values: 1.Pending, 2.Completed. Default value is Pending. 

    @ApiProperty({required: true, type: String})
    @IsNotEmpty({ message: 'paymentType is missing' })
    @IsString()
    paymentType?: string;
    //paymentType field save mode of payment like Card, Cash On Delivery,UPI...etc 

    @ApiProperty({required: false, type: String})
    @IsString()
    @IsOptional()
    transactionId?: string | null;
    //transactionId field used when user use third party payment system like paypal.This field used to stored third party payment system transaction id.

    @ApiProperty({required: false, type: String})
    @IsString()
    @IsOptional()
    transactionStatus?: string | null;
    //transactionStatus field used when user use third party payment system like paypal.This field used to stored third party payment system transaction status.

    @IsEnum(OrderStatus)
    @ApiProperty({required: true})
    @IsNotEmpty({ message: 'orderId is missing' })
    orderStatus?: OrderStatus;
    //orderStatus field have six values: 1.AwaitingFulfillment, 2.AwaitingShipment, 3.AwaitingPickup, 4.Completed, 5.Shipped, 6.Cancelled. Default value is AwaitingFulfillment. 

    @ApiProperty({required: false, type: String})
    @IsString()
    @IsOptional()
    customerNote?: string;
    //customerNote field used for stored customer given note,if there is any.

    @ApiProperty({ required: false, type: Date})
    @IsString()
    @IsOptional()
    createdAt?: string = new Date().toISOString();
    //createdAt field used for stored record create date in table.

    @ApiProperty({ required: false, type: Date })
    @IsString()
    @IsOptional()
    updatedAt?: string = new Date().toISOString();
    //updatedAt field used for stored record update date in table.
    
}



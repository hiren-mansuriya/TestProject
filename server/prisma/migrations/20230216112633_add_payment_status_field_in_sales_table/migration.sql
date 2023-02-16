-- AlterTable
ALTER TABLE `Sales` ADD COLUMN `paymentStatus` ENUM('Pending', 'Completed') NOT NULL DEFAULT 'Pending';

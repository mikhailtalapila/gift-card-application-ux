import { IGiftCard } from './gift-card';

export class ITransaction {
    id: number;
    date: Date;
    gcId: number;
    amountUsed: number;
    transactionNote: string;
    giftCard: IGiftCard;
}
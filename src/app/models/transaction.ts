import { IGiftCard } from './gift-card';

export class ITransaction {
    id: number;
    transactionDate: Date;
    giftCardId: number;
    amountUsed: number;
    transactionNote: string;
    giftCard: IGiftCard;
}
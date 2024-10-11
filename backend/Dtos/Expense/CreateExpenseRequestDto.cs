﻿namespace backend.Dtos.Expense
{
    public class CreateExpenseRequestDto
    {
        public int Amount { get; set; }
        public string Details { get; set; } = String.Empty;
        public DateTime Date { get; set; } = DateTime.Now;
        public int ExpenseCategoryId { get; set; }
    }
}
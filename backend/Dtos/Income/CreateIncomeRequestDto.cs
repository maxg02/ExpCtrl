﻿namespace backend.Dtos.Income
{
    public class CreateIncomeRequestDto
    {
        public int Amount { get; set; }
        public string Details { get; set; } = String.Empty;
        public DateTime Date { get; set; } = DateTime.Now;
    }
}

﻿namespace backend.Models
{
    public class BudgetPlan
    {
        public int Id { get; set; }
        public int Amount { get; set; }
        public string Details { get; set; } = String.Empty;
        public int Periodicity { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
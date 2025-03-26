﻿using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public List<Income> Incomes { get; set; } = new List<Income>();
        public List<FixedIncome> FixedIncomes { get; set; } = new List<FixedIncome>();
        public List<SavingGoal> SavingGoals { get; set; } = new List<SavingGoal>();
        public List<ExpenseCategory> Expense_Categories { get; set; } = new List<ExpenseCategory>();
    }
}

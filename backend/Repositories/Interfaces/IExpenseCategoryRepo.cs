﻿using backend.Dtos.ExpenseCategory;
using backend.Models;

namespace backend.Repositories.Interfaces
{
    public interface IExpenseCategoryRepo
    {
        Task<List<ExpenseCategory>> GetByUserIdFullAsync(int userId);
        Task<List<ExpenseCategory>> GetByUserIdWithBudgetAsync(int userId);
        Task<ExpenseCategory?> GetByIdAsync(int id);
        Task<ExpenseCategory> CreateAsync(ExpenseCategory expenseCategory);
        Task<ExpenseCategory?> UpdateAsync(int id, UpdateExpenseCategoryRequestDto expenseCategoryDto);
        Task<ExpenseCategory?> DeleteAsync(int id);

    }
}

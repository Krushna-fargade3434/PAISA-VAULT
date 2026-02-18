import { useState } from 'react';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useFinanceData } from '@/hooks/useFinanceData';

const QuickActions = () => {
  const [incomeOpen, setIncomeOpen] = useState(false);
  const [expenseOpen, setExpenseOpen] = useState(false);
  
  const { addIncome, addExpense, isAddingIncome, isAddingExpense } = useFinanceData();

  const [incomeForm, setIncomeForm] = useState({
    amount: '',
    description: '',
    source: 'Parents',
    date: new Date().toISOString().split('T')[0],
  });

  const [expenseForm, setExpenseForm] = useState<{
    amount: string;
    description: string;
    date: string;
  }>({
    amount: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleAddIncome = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(incomeForm.amount);
    if (!incomeForm.amount || isNaN(amount) || amount <= 0) {
      return;
    }
    
    addIncome({
      amount,
      description: incomeForm.description,
      source: incomeForm.source,
      date: incomeForm.date,
    });
    
    setIncomeForm({
      amount: '',
      description: '',
      source: 'Parents',
      date: new Date().toISOString().split('T')[0],
    });
    setIncomeOpen(false);
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(expenseForm.amount);
    if (!expenseForm.amount || isNaN(amount) || amount <= 0) {
      return;
    }
    
    addExpense({
      amount,
      category: 'Other',
      description: expenseForm.description,
      date: expenseForm.date,
    });
    
    setExpenseForm({
      amount: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
    });
    setExpenseOpen(false);
  };

  return (
    <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 w-full">
      <Dialog open={incomeOpen} onOpenChange={setIncomeOpen}>
        <DialogTrigger asChild>
          <Button className="gradient-income hover:opacity-90 hover:scale-105 transition-all gap-2 w-full xs:w-auto shadow-lg">
            <ArrowDownCircle className="w-4 h-4" />
            <span className="block xs:inline font-semibold">Add Income</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md border-2 border-income/20 bg-gradient-to-b from-background to-income/5">
          <DialogHeader>
            <DialogTitle className="font-display text-xl bg-gradient-to-r from-income to-emerald-600 bg-clip-text text-transparent">Add Income</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Record money received from parents or other sources.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddIncome} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="income-amount" className="font-medium">Amount (₹)</Label>
              <Input
                id="income-amount"
                type="number"
                placeholder="0.00"
                step="0.01"
                min="0"
                value={incomeForm.amount}
                onChange={(e) => setIncomeForm({ ...incomeForm, amount: e.target.value })}
                className="border-2 focus:border-income/50 transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="income-source" className="font-medium">Source</Label>
              <Select
                value={incomeForm.source}
                onValueChange={(value) => setIncomeForm({ ...incomeForm, source: value })}
              >
                <SelectTrigger className="border-2 focus:border-income/50 transition-all">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Parents">Parents</SelectItem>
                  <SelectItem value="Part-time Job">Part-time Job</SelectItem>
                  <SelectItem value="Scholarship">Scholarship</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="income-date" className="font-medium">Date</Label>
              <Input
                id="income-date"
                type="date"
                value={incomeForm.date}
                onChange={(e) => setIncomeForm({ ...incomeForm, date: e.target.value })}
                className="border-2 focus:border-income/50 transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="income-description" className="font-medium">Note (optional)</Label>
              <Textarea
                id="income-description"
                placeholder="Add a note..."
                value={incomeForm.description}
                onChange={(e) => setIncomeForm({ ...incomeForm, description: e.target.value })}
                className="border-2 focus:border-income/50 transition-all resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full gradient-income hover:opacity-90 hover:scale-105 transition-all shadow-lg" 
              disabled={isAddingIncome}
            >
              {isAddingIncome ? 'Adding...' : 'Add Income'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={expenseOpen} onOpenChange={setExpenseOpen}>
        <DialogTrigger asChild>
          <Button className="gradient-expense hover:opacity-90 hover:scale-105 transition-all gap-2 w-full xs:w-auto shadow-lg">
            <ArrowUpCircle className="w-4 h-4" />
            <span className="block xs:inline font-semibold">Add Expense</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md border-2 border-expense/20 bg-gradient-to-b from-background to-expense/5">
          <DialogHeader>
            <DialogTitle className="font-display text-xl bg-gradient-to-r from-expense to-rose-600 bg-clip-text text-transparent">Add Expense</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Record your daily expense.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddExpense} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="expense-amount" className="font-medium">Amount (₹)</Label>
              <Input
                id="expense-amount"
                type="number"
                placeholder="0.00"
                step="0.01"
                min="0"
                value={expenseForm.amount}
                onChange={(e) => setExpenseForm({ ...expenseForm, amount: e.target.value })}
                className="border-2 focus:border-expense/50 transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expense-date" className="font-medium">Date</Label>
              <Input
                id="expense-date"
                type="date"
                value={expenseForm.date}
                onChange={(e) => setExpenseForm({ ...expenseForm, date: e.target.value })}
                className="border-2 focus:border-expense/50 transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expense-description" className="font-medium">Description (optional)</Label>
              <Textarea
                id="expense-description"
                placeholder="What did you spend on?"
                value={expenseForm.description}
                onChange={(e) => setExpenseForm({ ...expenseForm, description: e.target.value })}
                className="border-2 focus:border-expense/50 transition-all resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full gradient-expense hover:opacity-90 hover:scale-105 transition-all shadow-lg" 
              disabled={isAddingExpense}
            >
              {isAddingExpense ? 'Adding...' : 'Add Expense'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuickActions;

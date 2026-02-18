import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useFinanceData } from '@/hooks/useFinanceData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Save, Loader2, User, Smartphone, Info, TrendingUp, Calendar, Shield, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/layout/Header';
import MonthlyExpensesSummary from '@/components/dashboard/MonthlyExpensesSummary';
import { APP_VERSION, APP_NAME } from '@/lib/version';
import { format } from 'date-fns';

const Profile = () => {
  const { user, updateProfile, loading: authLoading } = useAuth();
  const { expenseData } = useFinanceData();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (user) {
      setDisplayName(user.user_metadata?.display_name || '');
      setAvatarUrl(user.user_metadata?.avatar_url || '');
    } else if (!authLoading) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await updateProfile({
        displayName,
        avatarUrl,
      });

      if (error) throw error;

      toast({
        title: 'Profile updated',
        description: 'Your profile has been updated successfully.',
      });
    } catch (error) {
      toast({
        title: 'Error updating profile',
        description: error instanceof Error ? error.message : 'An error occurred',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) return null;

  const memberSince = user.created_at ? format(new Date(user.created_at), 'MMMM yyyy') : 'Recently';
  const totalTransactions = expenseData.length;
  const totalExpenses = expenseData.reduce((sum, exp) => sum + Number(exp.amount), 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
      <Header />
      <div className="container max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <Button
          variant="ghost"
          className="mb-4 sm:mb-6 gap-2 text-sm sm:text-base hover:bg-primary/10 transition-all duration-300"
          onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Button>

        {/* Profile Header Card with Enhanced Design */}
        <Card className="card-shadow mb-6 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur animate-slide-up overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -z-0" />
          <CardContent className="p-6 sm:p-8 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <Avatar className="relative w-24 h-24 sm:w-32 sm:h-32 border-4 border-background shadow-2xl ring-2 ring-primary/20 transition-all duration-500 group-hover:scale-105">
                  <AvatarImage src={avatarUrl} className="object-cover" />
                  <AvatarFallback className="text-3xl sm:text-4xl bg-gradient-to-br from-primary/20 to-emerald-600/20 text-primary font-bold">
                    {displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-1 text-center sm:text-left space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                  {displayName || 'User'}
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground flex items-center gap-2 justify-center sm:justify-start">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <Badge variant="secondary" className="gap-1.5 px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all">
                    <Calendar className="w-3.5 h-3.5" />
                    Member since {memberSince}
                  </Badge>
                  <Badge variant="outline" className="gap-1.5 px-3 py-1 border-income/30 text-income hover:bg-income/10 transition-all">
                    <Shield className="w-3.5 h-3.5" />
                    Verified Account
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Stats with Enhanced Cards */}
        <Card className="card-shadow mb-6 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur animate-fade-in" style={{animationDelay: '0.1s'}}>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              Your Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="group p-5 rounded-xl bg-gradient-to-br from-muted/80 to-muted/50 hover:from-primary/10 hover:to-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Total Transactions</p>
                <p className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{totalTransactions}</p>
              </div>
              <div className="group p-5 rounded-xl bg-gradient-to-br from-muted/80 to-muted/50 hover:from-expense/10 hover:to-expense/5 border border-border/50 hover:border-expense/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Total Expenses</p>
                <p className="text-2xl sm:text-3xl font-bold text-expense group-hover:scale-105 transition-transform">₹{totalExpenses.toFixed(0)}</p>
              </div>
              <div className="group p-5 rounded-xl bg-gradient-to-br from-muted/80 to-muted/50 hover:from-income/10 hover:to-income/5 border border-border/50 hover:border-income/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer col-span-2 sm:col-span-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Account Status</p>
                <p className="text-2xl sm:text-3xl font-bold text-income group-hover:scale-105 transition-transform">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Settings with Enhanced Form */}
        <Card className="card-shadow mb-6 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur animate-scale-in" style={{animationDelay: '0.2s'}}>
          <CardHeader className="px-4 sm:px-6 space-y-2">
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Profile Settings
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Update your personal information and profile appearance.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="space-y-5">
                <div className="space-y-3">
                  <Label className="text-sm sm:text-base font-semibold">Choose Avatar</Label>
                  <div className="grid grid-cols-5 gap-3 sm:gap-4">
                    {[1, 2, 3, 4, 5].map((num) => {
                      const imgPath = `/profileimg/${num}.png`;
                      return (
                        <div
                          key={num}
                          onClick={() => setAvatarUrl(imgPath)}
                          className={`
                            relative cursor-pointer rounded-full overflow-hidden aspect-square border-3 transition-all duration-300 hover:scale-110 active:scale-95
                            ${avatarUrl === imgPath ? 'border-primary ring-4 ring-primary/30 ring-offset-2 ring-offset-background shadow-lg shadow-primary/50 scale-105' : 'border-border/50 hover:border-primary/50 hover:shadow-md'}
                          `}
                        >
                          <img
                            src={imgPath}
                            alt={`Avatar ${num}`}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="displayName" className="text-sm sm:text-base font-semibold">Display Name</Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                      id="displayName"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="pl-10 text-sm sm:text-base h-11 sm:h-12 border-border/50 focus:border-primary/50 transition-all duration-300 bg-background/50"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base font-semibold">Email Address</Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      value={user.email}
                      disabled
                      className="pl-10 bg-muted/50 text-muted-foreground text-sm sm:text-base h-11 sm:h-12 border-border/30"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Info className="w-3 h-3" />
                    Email cannot be changed
                  </p>
                </div>
              </div>

              <Separator className="bg-border/50" />
              <div className="flex justify-end pt-2">
                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="gradient-primary min-w-[140px] sm:min-w-[160px] h-11 sm:h-12 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Monthly Expenses Section */}
        <div className="mt-6 sm:mt-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
          <MonthlyExpensesSummary expenseData={expenseData} />
        </div>

        {/* App Version Info with Enhanced Design */}
        <Card className="mt-6 sm:mt-8 card-shadow border-0 bg-gradient-to-r from-primary/5 via-emerald-600/5 to-primary/5 backdrop-blur animate-fade-in" style={{animationDelay: '0.4s'}}>
          <CardContent className="px-4 sm:px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-600/20 shadow-lg">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-foreground">{APP_NAME}</p>
                  <p className="text-xs text-muted-foreground font-medium">Version {APP_VERSION}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-xs text-primary font-medium">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="hidden sm:inline">Auto-updates</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('team');

  const players = [
    { number: 43, name: 'BAGA', position: 'GK', stats: { games: 34, wins: 28, saves: 94 } },
    { number: 16, name: 'KEWS1K', position: 'PD', stats: { games: 34, goals: 12, assists: 18 } },
    { number: 12, name: 'extazy', position: 'LD', stats: { games: 34, goals: 8, assists: 22 } },
    { number: 7, name: 'F', position: 'CW', stats: { games: 34, goals: 25, assists: 15 } },
    { number: 17, name: 'max', position: 'PW', stats: { games: 34, goals: 20, assists: 18 } }
  ];

  const standings = [
    { place: 1, team: 'Team Alpha', games: 34, wins: 28, losses: 6, points: 84 },
    { place: 2, team: 'Team Beta', games: 34, wins: 26, losses: 8, points: 78 },
    { place: 3, team: 'Team Gamma', games: 34, wins: 24, losses: 10, points: 72 },
    { place: 4, team: 'Team Delta', games: 34, wins: 22, losses: 12, points: 66 },
    { place: 5, team: 'Team Epsilon', games: 34, wins: 20, losses: 14, points: 60 },
    { place: 6, team: 'Team Zeta', games: 34, wins: 18, losses: 16, points: 54 },
    { place: 7, team: 'Team Eta', games: 34, wins: 16, losses: 18, points: 48 },
    { place: 8, team: 'Team Theta', games: 34, wins: 14, losses: 20, points: 42 },
    { place: 9, team: 'SKA 1946', games: 34, wins: 12, losses: 22, points: 36, highlight: true },
    { place: 10, team: 'Team Kappa', games: 34, wins: 10, losses: 24, points: 30 }
  ];

  const schedule = [
    { date: '2025-10-20', opponent: 'Team Alpha', location: 'Home', time: '19:00' },
    { date: '2025-10-24', opponent: 'Team Beta', location: 'Away', time: '18:30' },
    { date: '2025-10-27', opponent: 'Team Gamma', location: 'Home', time: '20:00' },
    { date: '2025-11-02', opponent: 'Team Delta', location: 'Away', time: '19:30' }
  ];

  const news = [
    { 
      title: 'Уверенная победа в домашнем матче',
      date: '2025-10-15',
      content: 'Команда SKA 1946 одержала важную победу над соперниками со счетом 4:2'
    },
    {
      title: 'BAGA признан игроком недели',
      date: '2025-10-12',
      content: 'Вратарь команды показал блестящую игру, отразив 95% бросков'
    },
    {
      title: 'Подготовка к решающим матчам',
      date: '2025-10-08',
      content: 'Команда активно готовится к важным играм плей-офф'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div 
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 51, 173, 0.85), rgba(239, 68, 68, 0.85)), url('https://cdn.poehali.dev/projects/65d4705d-1cbd-4e0a-bd16-24cc36c5bc00/files/cd2181da-947b-403e-ae88-ac9d98ab5945.jpg')`,
          backgroundSize: 'cover'
        }}
      >
        <div className="text-center text-white z-10 animate-fade-in">
          <div className="mb-6 flex items-center justify-center gap-4">
            <Icon name="Trophy" size={60} className="text-white" />
          </div>
          <h1 className="text-7xl font-bold mb-4 tracking-tight">
            SKA 1946
          </h1>
          <p className="text-2xl mb-2 tracking-wide">VFHL | PUCK</p>
          <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 backdrop-blur-sm border-white/30">
            9 место в турнирной таблице
          </Badge>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2 py-4 flex-wrap">
            {[
              { id: 'team', label: 'Команда', icon: 'Users' },
              { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
              { id: 'standings', label: 'Турнирная таблица', icon: 'BarChart3' },
              { id: 'news', label: 'Новости', icon: 'Newspaper' },
              { id: 'contacts', label: 'Контакты', icon: 'Mail' }
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => setActiveSection(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon} size={18} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {activeSection === 'team' && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-8 text-center">Состав команды</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {players.map((player) => (
                <Card 
                  key={player.number}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary"
                >
                  <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Icon name="User" size={32} />
                        </div>
                        <div>
                          <div className="text-5xl font-bold">{player.number}</div>
                          <Badge className="mt-1 bg-white/30 hover:bg-white/40">
                            {player.position}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-4">{player.name}</h3>
                    <div className="space-y-2">
                      {player.position === 'GK' ? (
                        <>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Игры:</span>
                            <span className="font-semibold">{player.stats.games}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Победы:</span>
                            <span className="font-semibold">{player.stats.wins}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">% Отражений:</span>
                            <span className="font-semibold">{player.stats.saves}%</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Игры:</span>
                            <span className="font-semibold">{player.stats.games}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Голы:</span>
                            <span className="font-semibold">{player.stats.goals}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Передачи:</span>
                            <span className="font-semibold">{player.stats.assists}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'standings' && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-8 text-center">Турнирная таблица</h2>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Место</th>
                        <th className="px-6 py-4 text-left">Команда</th>
                        <th className="px-6 py-4 text-center">И</th>
                        <th className="px-6 py-4 text-center">В</th>
                        <th className="px-6 py-4 text-center">П</th>
                        <th className="px-6 py-4 text-center">Очки</th>
                      </tr>
                    </thead>
                    <tbody>
                      {standings.map((team) => (
                        <tr
                          key={team.place}
                          className={`border-b transition-colors ${
                            team.highlight
                              ? 'bg-primary/10 font-bold border-l-4 border-l-primary'
                              : 'hover:bg-muted/50'
                          }`}
                        >
                          <td className="px-6 py-4">{team.place}</td>
                          <td className="px-6 py-4">{team.team}</td>
                          <td className="px-6 py-4 text-center">{team.games}</td>
                          <td className="px-6 py-4 text-center">{team.wins}</td>
                          <td className="px-6 py-4 text-center">{team.losses}</td>
                          <td className="px-6 py-4 text-center font-bold">{team.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'schedule' && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-8 text-center">Расписание матчей</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {schedule.map((match, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="CalendarDays" size={24} className="text-primary" />
                      {new Date(match.date).toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-lg">
                      <Icon name="Shield" size={20} className="text-secondary" />
                      <span className="font-semibold">Противник:</span>
                      <span>{match.opponent}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={20} className="text-secondary" />
                      <Badge variant={match.location === 'Home' ? 'default' : 'secondary'}>
                        {match.location === 'Home' ? 'Дома' : 'В гостях'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-secondary" />
                      <span className="font-semibold">{match.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-8 text-center">Новости команды</h2>
            <div className="space-y-6">
              {news.map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <Badge variant="outline" className="shrink-0">
                        {new Date(item.date).toLocaleDateString('ru-RU')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-8 text-center">Контакты</h2>
            <Card className="max-w-2xl mx-auto border-t-4 border-t-primary">
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">ska1946@vfhlpuck.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">Ледовая арена VFHL, Москва</div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Twitter" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Instagram" size={20} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Trophy" size={32} />
            <h3 className="text-3xl font-bold">SKA 1946</h3>
          </div>
          <p className="text-white/80">VFHL | PUCK League</p>
          <p className="text-sm text-white/60 mt-4">© 2025 SKA 1946. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

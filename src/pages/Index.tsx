import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('team');
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null);
  const [likedNews, setLikedNews] = useState<number[]>([]);

  const players = [
    { number: 43, name: 'BAGA', position: 'GK', stats: { games: 34, wins: 28, saves: 94 } },
    { number: 16, name: 'KEWS1K', position: 'PD', stats: { games: 34, goals: 12, assists: 18 } },
    { number: 12, name: 'extazy', position: 'LD', stats: { games: 34, goals: 8, assists: 22 } },
    { number: 7, name: 'F', position: 'CW', stats: { games: 34, goals: 25, assists: 15 } },
    { number: 17, name: 'max', position: 'PW', stats: { games: 34, goals: 20, assists: 18 } }
  ];

  const standings = [
    { place: 1, team: 'Металлург Мгн', games: 38, wins: 32, losses: 6, points: 96 },
    { place: 2, team: 'Авангард', games: 38, wins: 30, losses: 8, points: 90 },
    { place: 3, team: 'ЦСКА', games: 38, wins: 28, losses: 10, points: 84 },
    { place: 4, team: 'СКА СПб', games: 38, wins: 26, losses: 12, points: 78 },
    { place: 5, team: 'Трактор', games: 38, wins: 24, losses: 14, points: 72 },
    { place: 6, team: 'Локомотив', games: 38, wins: 22, losses: 16, points: 66 },
    { place: 7, team: 'Салават Юлаев', games: 38, wins: 20, losses: 18, points: 60 },
    { place: 8, team: 'Ак Барс', games: 38, wins: 18, losses: 20, points: 54 },
    { place: 9, team: 'SKA 1946', games: 38, wins: 16, losses: 22, points: 48, highlight: true },
    { place: 10, team: 'Динамо Мск', games: 38, wins: 14, losses: 24, points: 42 },
    { place: 11, team: 'Сочи', games: 38, wins: 12, losses: 26, points: 36 },
    { place: 12, team: 'Спартак', games: 38, wins: 10, losses: 28, points: 30 },
    { place: 13, team: 'Северсталь', games: 38, wins: 8, losses: 30, points: 24 },
    { place: 14, team: 'Витязь', games: 38, wins: 6, losses: 32, points: 18 },
    { place: 15, team: 'Амур', games: 38, wins: 4, losses: 34, points: 12 }
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
                className="gap-2 transition-all hover:scale-105 active:scale-95"
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
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary cursor-pointer"
                  onClick={() => setSelectedPlayer(selectedPlayer === player.number ? null : player.number)}
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
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{player.name}</h3>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPlayer(selectedPlayer === player.number ? null : player.number);
                        }}
                        className="transition-transform hover:scale-110"
                      >
                        <Icon name={selectedPlayer === player.number ? 'ChevronUp' : 'ChevronDown'} size={16} />
                      </Button>
                    </div>
                    <div className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      selectedPlayer === player.number ? 'max-h-96 opacity-100' : 'max-h-24 opacity-60'
                    }`}>
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
                    {selectedPlayer === player.number && (
                      <div className="mt-4 pt-4 border-t flex gap-2">
                        <Button 
                          size="sm" 
                          variant="default"
                          className="flex-1 gap-2 transition-all hover:scale-105"
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Просмотр профиля игрока ${player.name}`);
                          }}
                        >
                          <Icon name="UserCircle" size={16} />
                          Profile
                        </Button>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="flex-1 gap-2 transition-all hover:scale-105"
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Детальная статистика игрока ${player.name}`);
                          }}
                        >
                          <Icon name="BarChart2" size={16} />
                          Stats
                        </Button>
                      </div>
                    )}
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
                <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1 border-l-4 border-l-primary group">
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
                    <Button 
                      className="w-full mt-2 transition-all group-hover:scale-105"
                      onClick={() => alert(`Билеты на матч с ${match.opponent} скоро в продаже!`)}
                    >
                      <Icon name="Ticket" size={18} className="mr-2" />
                      Купить билет
                    </Button>
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
                <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1 border-t-4 border-t-secondary">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <Badge variant="outline" className="shrink-0">
                        {new Date(item.date).toLocaleDateString('ru-RU')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground mb-4">{item.content}</p>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant={likedNews.includes(idx) ? 'default' : 'outline'}
                        onClick={() => {
                          setLikedNews(prev => 
                            prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
                          );
                        }}
                        className="gap-2 transition-all hover:scale-105"
                      >
                        <Icon name={likedNews.includes(idx) ? 'Heart' : 'Heart'} size={16} className={likedNews.includes(idx) ? 'fill-current' : ''} />
                        {likedNews.includes(idx) ? 'Нравится' : 'Понравилось'}
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2 transition-all hover:scale-105">
                        <Icon name="Share2" size={16} />
                        Поделиться
                      </Button>
                    </div>
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
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full transition-all hover:scale-110 hover:bg-sky-500 hover:text-white hover:border-sky-500"
                      onClick={() => window.open('https://twitter.com', '_blank')}
                    >
                      <Icon name="Twitter" size={20} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full transition-all hover:scale-110 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                      onClick={() => window.open('https://facebook.com', '_blank')}
                    >
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full transition-all hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-pink-500"
                      onClick={() => window.open('https://instagram.com', '_blank')}
                    >
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
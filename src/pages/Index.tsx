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
    { place: 1, team: 'Красная Армия', games: 10, wins: 8, winsOT: 0, lossesOT: 1, losses: 1, goalsFor: 23, goalsAgainst: 9, points: 17 },
    { place: 2, team: 'Тюменский Легион', games: 11, wins: 6, winsOT: 1, lossesOT: 0, losses: 3, goalsFor: 24, goalsAgainst: 11, points: 16 },
    { place: 3, team: 'Сибирские снайперы', games: 12, wins: 7, winsOT: 0, lossesOT: 0, losses: 4, goalsFor: 24, goalsAgainst: 13, points: 15 },
    { place: 4, team: 'Динамо-Шинник', games: 8, wins: 5, winsOT: 1, lossesOT: 0, losses: 1, goalsFor: 21, goalsAgainst: 10, points: 14 },
    { place: 5, team: 'Толпар', games: 10, wins: 5, winsOT: 0, lossesOT: 0, losses: 3, goalsFor: 26, goalsAgainst: 14, points: 13 },
    { place: 6, team: 'Стальные Лисы', games: 7, wins: 6, winsOT: 0, lossesOT: 0, losses: 1, goalsFor: 14, goalsAgainst: 6, points: 12 },
    { place: 7, team: 'МХК Спартак', games: 5, wins: 4, winsOT: 0, lossesOT: 0, losses: 1, goalsFor: 12, goalsAgainst: 3, points: 8 },
    { place: 8, team: 'Мамонты Югры', games: 5, wins: 3, winsOT: 1, lossesOT: 0, losses: 1, goalsFor: 10, goalsAgainst: 6, points: 8 },
    { place: 9, team: 'Академия Михайлова', games: 7, wins: 3, winsOT: 1, lossesOT: 0, losses: 3, goalsFor: 9, goalsAgainst: 8, points: 8 },
    { place: 10, team: 'Локо', games: 8, wins: 3, winsOT: 0, lossesOT: 1, losses: 4, goalsFor: 19, goalsAgainst: 24, points: 7 },
    { place: 11, team: 'Омские Ястребы', games: 10, wins: 3, winsOT: 0, lossesOT: 0, losses: 7, goalsFor: 13, goalsAgainst: 18, points: 6 },
    { place: 12, team: 'МХК Динамо СПб', games: 8, wins: 1, winsOT: 0, lossesOT: 1, losses: 4, goalsFor: 10, goalsAgainst: 17, points: 6 },
    { place: 13, team: 'СКА 19-46', games: 7, wins: 3, winsOT: 0, lossesOT: 0, losses: 4, goalsFor: 6, goalsAgainst: 12, points: 6, highlight: true },
    { place: 14, team: 'Кузнецкие Медведи', games: 9, wins: 2, winsOT: 0, lossesOT: 0, losses: 7, goalsFor: 7, goalsAgainst: 20, points: 4 },
    { place: 15, team: 'Чайка', games: 4, wins: 1, winsOT: 0, lossesOT: 1, losses: 2, goalsFor: 5, goalsAgainst: 9, points: 3 },
    { place: 16, team: 'Белые Медведи', games: 8, wins: 1, winsOT: 0, lossesOT: 0, losses: 6, goalsFor: 4, goalsAgainst: 20, points: 3 },
    { place: 17, team: 'Крылья Советов', games: 2, wins: 1, winsOT: 0, lossesOT: 0, losses: 1, goalsFor: 2, goalsAgainst: 2, points: 2 },
    { place: 18, team: 'Алмаз', games: 9, wins: 0, winsOT: 0, lossesOT: 0, losses: 9, goalsFor: 5, goalsAgainst: 31, points: 0 }
  ];

  const schedule = [
    { date: '2025-10-25', opponent: 'Белые Медведи', location: 'Home', time: '17:30' },
    { date: '2025-10-26', opponent: 'Красная Армия', location: 'Home', time: '17:30' },
    { date: '2025-10-27', opponent: 'Сибирские снайперы', location: 'Home', time: '17:30' },
    { date: '2025-10-29', opponent: 'Омские Ястребы', location: 'Away', time: '16:30' },
    { date: '2025-10-30', opponent: 'Толпар', location: 'Away', time: '16:30' },
    { date: '2025-10-31', opponent: 'Академия Михайлова', location: 'Away', time: '16:30' },
    { date: '2025-11-07', opponent: 'Стальные Лисы', location: 'Home', time: '18:30' },
    { date: '2025-11-15', opponent: 'Локо', location: 'Home', time: '16:30' },
    { date: '2025-11-18', opponent: 'Шинник', location: 'Away', time: '18:30' },
    { date: '2025-11-22', opponent: 'Кузнецкие Медведи', location: 'Home', time: '17:30' },
    { date: '2025-11-23', opponent: 'Алмаз', location: 'Away', time: '16:30' }
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
          <div className="mb-6 flex items-center justify-center">
            <img 
              src="https://tickets-hockey.ru/wp-content/uploads/ubs/team/872/ska-1946-mhl.svg" 
              alt="SKA 1946 Logo" 
              className="w-40 h-40 drop-shadow-2xl"
            />
          </div>
          <h1 className="text-7xl font-bold mb-4 tracking-tight">
            SKA 1946
          </h1>
          <p className="text-2xl mb-2 tracking-wide">VFHL | PUCK</p>
          <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 backdrop-blur-sm border-white/30">
            13 место в турнирной таблице
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
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold">{player.name}</h3>
                    </div>
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
                        <th className="px-4 py-4 text-left">#</th>
                        <th className="px-4 py-4 text-left">Команда</th>
                        <th className="px-4 py-4 text-center">И</th>
                        <th className="px-4 py-4 text-center">В</th>
                        <th className="px-4 py-4 text-center">ВО</th>
                        <th className="px-4 py-4 text-center">ПО</th>
                        <th className="px-4 py-4 text-center">П</th>
                        <th className="px-4 py-4 text-center">ШЗ</th>
                        <th className="px-4 py-4 text-center">ШП</th>
                        <th className="px-4 py-4 text-center font-bold">О</th>
                      </tr>
                    </thead>
                    <tbody>
                      {standings.map((team) => (
                        <tr
                          key={team.place}
                          className={`border-b transition-colors ${
                            team.highlight
                              ? 'bg-primary/10 font-bold border-l-4 border-l-primary'
                              : team.place >= 15
                              ? 'bg-red-50 border-l-4 border-l-red-500 hover:bg-red-100'
                              : 'hover:bg-muted/50'
                          }`}
                        >
                          <td className="px-4 py-4">{team.place}</td>
                          <td className="px-4 py-4">{team.team}</td>
                          <td className="px-4 py-4 text-center">{team.games}</td>
                          <td className="px-4 py-4 text-center">{team.wins}</td>
                          <td className="px-4 py-4 text-center">{team.winsOT}</td>
                          <td className="px-4 py-4 text-center">{team.lossesOT}</td>
                          <td className="px-4 py-4 text-center">{team.losses}</td>
                          <td className="px-4 py-4 text-center">{team.goalsFor}</td>
                          <td className="px-4 py-4 text-center">{team.goalsAgainst}</td>
                          <td className="px-4 py-4 text-center font-bold">{team.points}</td>
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
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <Icon name="Twitch" size={24} className="text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Twitch</div>
                    <div className="text-muted-foreground mb-2">twitch.tv/virtualfarmhockeyleague2</div>
                    <Button 
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white gap-2"
                      onClick={() => window.open('https://www.twitch.tv/virtualfarmhockeyleague2', '_blank')}
                    >
                      <Icon name="PlayCircle" size={18} />
                      Смотреть стрим
                    </Button>
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
                      className="rounded-full transition-all hover:scale-110 hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc]"
                      onClick={() => window.open('https://t.me/SKA1946VFHL', '_blank')}
                    >
                      <Icon name="Send" size={20} />
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
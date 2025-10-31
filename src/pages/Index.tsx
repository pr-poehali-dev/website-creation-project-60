import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeTab, setActiveTab] = useState('rejuvenation');

  const services = {
    rejuvenation: [
      {
        title: 'Биоревитализация',
        description: 'Глубокое увлажнение и восстановление кожи на клеточном уровне',
        icon: 'Sparkles',
        price: 'от 8 000 ₽'
      },
      {
        title: 'Контурная пластика',
        description: 'Коррекция овала лица и восстановление объёмов',
        icon: 'Heart',
        price: 'от 15 000 ₽'
      },
      {
        title: 'Ботулинотерапия',
        description: 'Разглаживание мимических морщин и профилактика старения',
        icon: 'Zap',
        price: 'от 5 000 ₽'
      }
    ],
    wellness: [
      {
        title: 'Детокс-программы',
        description: 'Комплексное очищение организма и восстановление энергии',
        icon: 'Leaf',
        price: 'от 12 000 ₽'
      },
      {
        title: 'Массажные практики',
        description: 'Расслабление, снятие стресса и улучшение самочувствия',
        icon: 'HandHeart',
        price: 'от 4 000 ₽'
      },
      {
        title: 'Витаминотерапия',
        description: 'Повышение иммунитета и жизненного тонуса',
        icon: 'Pill',
        price: 'от 3 500 ₽'
      }
    ]
  };

  const beforeAfter = [
    {
      title: 'Биоревитализация',
      description: 'Результат после курса процедур',
      duration: '3 месяца',
      image: 'https://cdn.poehali.dev/projects/ecf5c9ad-237f-4500-8e42-7e2898e88ad8/files/d16c83eb-fa43-4f34-b05a-2272045672a6.jpg'
    },
    {
      title: 'Контурная пластика',
      description: 'Моделирование овала лица',
      duration: '1 процедура',
      image: 'https://cdn.poehali.dev/projects/ecf5c9ad-237f-4500-8e42-7e2898e88ad8/files/d16c83eb-fa43-4f34-b05a-2272045672a6.jpg'
    },
    {
      title: 'Комплексная программа',
      description: 'Омоложение + оздоровление',
      duration: '6 месяцев',
      image: 'https://cdn.poehali.dev/projects/ecf5c9ad-237f-4500-8e42-7e2898e88ad8/files/d16c83eb-fa43-4f34-b05a-2272045672a6.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Елена М.',
      age: 42,
      rating: 5,
      text: 'Невероятный результат! После курса биоревитализации кожа стала упругой и сияющей. Все знакомые спрашивают, что я сделала!',
      service: 'Биоревитализация'
    },
    {
      name: 'Анна К.',
      age: 38,
      rating: 5,
      text: 'Профессиональный подход и внимательное отношение. Результат превзошёл все ожидания. Рекомендую всем!',
      service: 'Контурная пластика'
    },
    {
      name: 'Мария С.',
      age: 45,
      rating: 5,
      text: 'Проходила комплексную программу оздоровления. Чувствую себя на 10 лет моложе! Энергия бьёт ключом.',
      service: 'Детокс-программа'
    }
  ];

  const currentServices = activeTab === 'rejuvenation' ? services.rejuvenation : services.wellness;

  return (
    <div className="min-h-screen">
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(255, 222, 226, 0.2) 100%), url('https://cdn.poehali.dev/projects/ecf5c9ad-237f-4500-8e42-7e2898e88ad8/files/4e709c7f-29e9-4843-b101-d33696b3b222.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="mx-auto text-lg px-6 py-2 bg-primary/10 text-primary border-primary/20">
              ✨ БЕЗконтактная косметология Светланы Соковиковой
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Верните молодость
              </span>
              <br />
              <span className="text-foreground">
                и жизненную энергию
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Инновационные методики омоложения и оздоровления для вашей красоты и благополучия
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть результаты
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-2">Довольных клиентов</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-2">Лет опыта</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground mt-2">Рекомендуют нас</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="container px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 text-base px-4 py-1">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Выберите свой путь к
              <span className="text-primary"> совершенству</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Индивидуальный подход и проверенные методики для достижения ваших целей
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              size="lg"
              variant={activeTab === 'rejuvenation' ? 'default' : 'outline'}
              onClick={() => setActiveTab('rejuvenation')}
              className="rounded-full px-8"
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              Омоложение
            </Button>
            <Button
              size="lg"
              variant={activeTab === 'wellness' ? 'default' : 'outline'}
              onClick={() => setActiveTab('wellness')}
              className="rounded-full px-8"
            >
              <Icon name="Heart" className="mr-2" size={20} />
              Оздоровление
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentServices.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 rounded-3xl overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" className="group-hover:text-primary">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
        <div className="container px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 text-base px-4 py-1">Результаты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Фото <span className="text-primary">до и после</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов говорят сами за себя
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {beforeAfter.map((item, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden rounded-3xl hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white">
                      <Icon name="Clock" className="mr-1" size={14} />
                      {item.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  <Button variant="ghost" className="mt-4 w-full group-hover:text-primary">
                    Увеличить фото
                    <Icon name="Expand" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 text-base px-4 py-1">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что говорят наши <span className="text-primary">клиенты</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Доверие и благодарность — наша главная награда
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="relative rounded-3xl border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="pt-4 border-t">
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.age} года</div>
                    <Badge variant="secondary" className="mt-2">
                      {testimonial.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto rounded-3xl border-2 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="Calendar" className="text-primary" size={40} />
              </div>
              
              <h2 className="text-4xl font-bold mb-4">
                Готовы начать преображение?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Запишитесь на бесплатную консультацию и получите индивидуальный план процедур
              </p>
              
              <Button size="lg" className="text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Icon name="Phone" className="mr-2" size={20} />
                Записаться сейчас
              </Button>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} />
                  Лицензированная клиника
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={16} />
                  Сертифицированные специалисты
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2">Клиника красоты</div>
              <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
            </div>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
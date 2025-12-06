import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      category: 'Главные блюда',
      items: [
        { name: 'Ropa Vieja', description: 'Тушёная говядина с перцем и томатами', price: '890₽', icon: '🥩' },
        { name: 'Lechón Asado', description: 'Жареная свинина по-кубински', price: '950₽', icon: '🍖' },
        { name: 'Arroz con Pollo', description: 'Рис с курицей и специями', price: '750₽', icon: '🍗' },
        { name: 'Picadillo', description: 'Кубинский фарш с оливками', price: '820₽', icon: '🍲' },
      ],
    },
    {
      category: 'Напитки',
      items: [
        { name: 'Mojito Clásico', description: 'Классический мохито с мятой', price: '450₽', icon: '🍹' },
        { name: 'Cuba Libre', description: 'Ром, кола и лайм', price: '400₽', icon: '🥃' },
        { name: 'Piña Colada', description: 'Ром, кокос и ананас', price: '480₽', icon: '🍍' },
        { name: 'Daiquiri', description: 'Ром, лайм и сахар', price: '420₽', icon: '🍸' },
      ],
    },
    {
      category: 'Десерты',
      items: [
        { name: 'Flan Cubano', description: 'Карамельный пудинг', price: '350₽', icon: '🍮' },
        { name: 'Tres Leches', description: 'Торт с тремя видами молока', price: '380₽', icon: '🍰' },
        { name: 'Churros', description: 'С шоколадным соусом', price: '320₽', icon: '🥨' },
      ],
    },
  ];

  const promos = [
    {
      title: 'Счастливые часы',
      description: 'Скидка 30% на коктейли с 15:00 до 18:00',
      badge: 'Каждый день',
    },
    {
      title: 'Комбо обед',
      description: 'Главное блюдо + напиток за 990₽',
      badge: 'Будни',
    },
    {
      title: 'Музыкальные вечера',
      description: 'Живая латинская музыка по пятницам',
      badge: 'Пт-Сб',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-muted/30 to-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b-4 border-secondary z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl animate-pulse-slow">🇨🇺</div>
              <div>
                <h1 className="text-2xl font-bold text-primary">CUBA-GRILL</h1>
                <p className="text-xs text-muted-foreground">Ростов-на-Дону</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'menu', 'about', 'delivery', 'promos'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-all hover:text-primary ${
                    activeSection === section ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'menu' && 'Меню'}
                  {section === 'about' && 'О нас'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'promos' && 'Акции'}
                </button>
              ))}
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary text-foreground text-lg px-4 py-2">
                🎵 Аутентичная кубинская кухня
              </Badge>
              <h2 className="text-6xl md:text-7xl font-bold text-primary leading-tight">
                Вкус Кубы в сердце Ростова
              </h2>
              <p className="text-xl text-muted-foreground">
                Погрузитесь в атмосферу Гаваны с нашими традиционными блюдами, 
                приготовленными по аутентичным рецептам под живую латинскую музыку
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                  onClick={() => scrollToSection('menu')}
                >
                  Смотреть меню
                  <Icon name="ChevronRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-secondary text-lg px-8"
                  onClick={() => scrollToSection('delivery')}
                >
                  <Icon name="Bike" size={20} className="mr-2" />
                  Заказать доставку
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">12+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Блюд в меню</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">5★</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
              <div className="relative bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform">
                <div className="text-8xl mb-4 animate-float">🍹</div>
                <h3 className="text-3xl font-bold mb-2">Фирменный мохито</h3>
                <p className="text-lg opacity-90 mb-4">Освежающий вкус Карибов</p>
                <div className="flex gap-4 text-6xl">
                  <span className="animate-float" style={{ animationDelay: '0.2s' }}>🎺</span>
                  <span className="animate-float" style={{ animationDelay: '0.4s' }}>🎵</span>
                  <span className="animate-float" style={{ animationDelay: '0.6s' }}>🥁</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-secondary text-foreground text-lg px-4 py-2 mb-4">
              🍴 Наше меню
            </Badge>
            <h2 className="text-5xl font-bold text-primary mb-4">Кубинские деликатесы</h2>
            <p className="text-xl text-muted-foreground">
              Каждое блюдо готовится по традиционным рецептам из свежих ингредиентов
            </p>
          </div>

          <div className="space-y-12">
            {menuItems.map((category) => (
              <div key={category.category}>
                <h3 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  <div className="h-1 w-12 bg-secondary rounded"></div>
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item) => (
                    <Card 
                      key={item.name} 
                      className="hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-secondary"
                    >
                      <CardContent className="p-6">
                        <div className="text-6xl mb-4">{item.icon}</div>
                        <h4 className="text-xl font-bold text-primary mb-2">{item.name}</h4>
                        <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-accent">{item.price}</span>
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 border-4 border-secondary">
                <div className="grid grid-cols-3 gap-6 text-7xl">
                  <div className="animate-float">🎸</div>
                  <div className="animate-float" style={{ animationDelay: '0.2s' }}>🌴</div>
                  <div className="animate-float" style={{ animationDelay: '0.4s' }}>🥘</div>
                  <div className="animate-float" style={{ animationDelay: '0.6s' }}>🎺</div>
                  <div className="animate-float" style={{ animationDelay: '0.8s' }}>🍹</div>
                  <div className="animate-float" style={{ animationDelay: '1s' }}>🥁</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Badge className="bg-accent text-white text-lg px-4 py-2">
                🇨🇺 О нас
              </Badge>
              <h2 className="text-5xl font-bold text-primary">Кусочек Кубы в Ростове</h2>
              <p className="text-lg text-muted-foreground">
                CUBA-GRILL — это не просто ресторан, это путешествие на солнечную Кубу. 
                Мы воссоздали атмосферу гаванских улочек с живой латинской музыкой, 
                яркими красками и невероятными ароматами.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="ChefHat" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Аутентичные рецепты</h4>
                    <p className="text-muted-foreground">Наши повара обучались на Кубе</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <Icon name="Music" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Живая музыка</h4>
                    <p className="text-muted-foreground">Латинские ритмы каждые выходные</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">В центре Ростова</h4>
                    <p className="text-muted-foreground">Удобное расположение и парковка</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-accent text-white text-lg px-4 py-2 mb-4">
              🚚 Доставка
            </Badge>
            <h2 className="text-5xl font-bold text-primary mb-4">Быстрая доставка по Ростову</h2>
            <p className="text-xl text-muted-foreground">
              Привезём горячие блюда прямо к вашей двери за 40-60 минут
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">40-60 минут</h3>
                <p className="text-muted-foreground">Среднее время доставки</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-secondary/20 hover:border-secondary transition-all">
              <CardContent className="p-8">
                <div className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" size={40} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Бесплатно</h3>
                <p className="text-muted-foreground">При заказе от 1500₽</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-accent/20 hover:border-accent transition-all">
              <CardContent className="p-8">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={40} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">По всему городу</h3>
                <p className="text-muted-foreground">Доставляем везде</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-12">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Оформить заказ
            </Button>
          </div>
        </div>
      </section>

      <section id="promos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-white text-lg px-4 py-2 mb-4">
              🎁 Акции
            </Badge>
            <h2 className="text-5xl font-bold text-primary mb-4">Выгодные предложения</h2>
            <p className="text-xl text-muted-foreground">
              Специальные предложения для наших гостей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {promos.map((promo, index) => (
              <Card 
                key={promo.title}
                className="relative overflow-hidden border-4 border-secondary hover:shadow-2xl transition-all hover:scale-105"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-bl-full"></div>
                <CardContent className="p-8 relative">
                  <Badge className="bg-accent text-white mb-4">{promo.badge}</Badge>
                  <div className="text-5xl mb-4">
                    {index === 0 && '⏰'}
                    {index === 1 && '🍽️'}
                    {index === 2 && '🎵'}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{promo.title}</h3>
                  <p className="text-muted-foreground text-lg">{promo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🇨🇺</div>
                <div>
                  <h3 className="text-2xl font-bold">CUBA-GRILL</h3>
                  <p className="text-sm opacity-80">Ростов-на-Дону</p>
                </div>
              </div>
              <p className="opacity-90">Кубинская кухня и атмосфера</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Меню</h4>
              <ul className="space-y-2 opacity-90">
                <li>Главные блюда</li>
                <li>Напитки</li>
                <li>Десерты</li>
                <li>Акции</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 opacity-90">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (863) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  ул. Большая Садовая, 123
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  10:00 - 23:00
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-80">
            <p>© 2024 CUBA-GRILL. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

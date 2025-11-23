import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      category: "Боты VK",
      icon: "Bot",
      color: "primary",
      glowClass: "box-glow-purple",
      items: [
        { name: "Авто-постинг", description: "Автоматическая публикация контента" },
        { name: "Модерация", description: "Умная фильтрация сообщений" },
        { name: "Аналитика", description: "Статистика активности группы" },
      ]
    },
    {
      category: "Скрипты VK",
      icon: "Code2",
      color: "secondary",
      glowClass: "box-glow-pink",
      items: [
        { name: "Парсер данных", description: "Сбор информации из групп" },
        { name: "Авто-лайкер", description: "Автоматическое взаимодействие" },
        { name: "Рассылка", description: "Массовая отправка сообщений" },
      ]
    },
    {
      category: "Софты",
      icon: "Laptop",
      color: "accent",
      glowClass: "box-glow-orange",
      items: [
        { name: "VK Manager", description: "Управление аккаунтами" },
        { name: "Content Studio", description: "Создание и планирование постов" },
        { name: "Analytics Pro", description: "Продвинутая аналитика" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold glow-purple">By.Babushkin</h1>
          <div className="flex gap-6">
            <a href="#bots" className="text-foreground/80 hover:text-primary transition-colors">Боты</a>
            <a href="#scripts" className="text-foreground/80 hover:text-secondary transition-colors">Скрипты</a>
            <a href="#software" className="text-foreground/80 hover:text-accent transition-colors">Софты</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-7xl font-black mb-6 glow-purple animate-pulse-glow">
              By.Babushkin
            </h2>
            <p className="text-2xl text-foreground/80 mb-4">
              Инструменты для VK нового поколения
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Боты, скрипты и программное обеспечение для автоматизации и управления вашим присутствием в ВКонтакте
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 box-glow-purple animate-pulse-glow"
            >
              <Icon name="Rocket" className="mr-2" size={24} />
              Начать работу
            </Button>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div 
                key={idx}
                id={product.category === "Боты VK" ? "bots" : product.category === "Скрипты VK" ? "scripts" : "software"}
                className="animate-slide-up"
                style={{ animationDelay: `${idx * 0.2}s`, animationFillMode: 'both' }}
              >
                <Card className={`p-8 bg-card border-2 border-${product.color}/30 hover:border-${product.color} ${product.glowClass} transition-all duration-300 hover:scale-105 group`}>
                  <div className={`w-16 h-16 rounded-full bg-${product.color}/20 flex items-center justify-center mb-6 group-hover:animate-float`}>
                    <Icon name={product.icon as any} size={32} className={`text-${product.color}`} />
                  </div>
                  <h3 className={`text-3xl font-bold mb-6 text-${product.color}`}>
                    {product.category}
                  </h3>
                  <div className="space-y-4">
                    {product.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx}
                        className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer group/item"
                      >
                        <h4 className="font-semibold text-lg mb-1 group-hover/item:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-card border-2 border-primary/30 box-glow-purple">
            <div className="text-center mb-8">
              <Icon name="User" size={64} className="text-primary mx-auto mb-4 animate-pulse-glow" />
              <h3 className="text-4xl font-bold mb-4 glow-purple">Разработчик</h3>
              <p className="text-xl text-foreground/80 mb-2">By.Babushkin</p>
              <p className="text-muted-foreground mb-8">
                Создаю инновационные решения для автоматизации VK
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-2 border-primary/50 hover:border-primary hover:bg-primary/10 group"
              >
                <Icon name="MessageCircle" className="mr-2 group-hover:animate-pulse-glow" size={20} />
                Написать в VK
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-2 border-secondary/50 hover:border-secondary hover:bg-secondary/10 group"
              >
                <Icon name="Send" className="mr-2 group-hover:animate-pulse-glow" size={20} />
                Telegram
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-2 border-accent/50 hover:border-accent hover:bg-accent/10 group"
              >
                <Icon name="Mail" className="mr-2 group-hover:animate-pulse-glow" size={20} />
                Email
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-2 border-primary/50 hover:border-primary hover:bg-primary/10 group"
              >
                <Icon name="Github" className="mr-2 group-hover:animate-pulse-glow" size={20} />
                GitHub
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground">
                Готов обсудить ваш проект и предложить индивидуальное решение
              </p>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-primary/20 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 By.Babushkin. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            Инструменты для VK • Боты • Скрипты • Софт
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products: Product[] = [
    {
      id: 1,
      name: 'Беспроводные наушники Premium',
      price: 12990,
      image: 'https://cdn.poehali.dev/projects/ecf5c9ad-237f-4500-8e42-7e2898e88ad8/files/0cb1f684-a6c5-420e-a0dc-d5539c754f47.jpg',
      category: 'audio',
      rating: 4.8,
      reviews: 124,
      inStock: true
    },
    {
      id: 2,
      name: 'Умные часы Pro Max',
      price: 24990,
      image: 'https://cdn.poehali.dev/projects/ecf5c9ad-237f-4500-8e42-7e2898e88ad8/files/100c3153-0768-4a37-9a89-0685d4699ed5.jpg',
      category: 'wearables',
      rating: 4.9,
      reviews: 89,
      inStock: true
    },
    {
      id: 3,
      name: 'Ноутбук Ultra Slim',
      price: 89990,
      image: 'https://cdn.poehali.dev/projects/ecf5c9ad-237f-4500-8e42-7e2898e88ad8/files/d2defdb9-2c10-4a45-9c8a-86b144477acb.jpg',
      category: 'computers',
      rating: 5.0,
      reviews: 56,
      inStock: true
    },
    {
      id: 4,
      name: 'Портативная колонка Bass',
      price: 5990,
      image: 'https://cdn.poehali.dev/projects/ecf5c9ad-237f-4500-8e42-7e2898e88ad8/files/0cb1f684-a6c5-420e-a0dc-d5539c754f47.jpg',
      category: 'audio',
      rating: 4.6,
      reviews: 203,
      inStock: true
    },
    {
      id: 5,
      name: 'Фитнес-браслет Active',
      price: 3990,
      image: 'https://cdn.poehali.dev/projects/ecf5c9ad-237f-4500-8e42-7e2898e88ad8/files/100c3153-0768-4a37-9a89-0685d4699ed5.jpg',
      category: 'wearables',
      rating: 4.7,
      reviews: 167,
      inStock: true
    },
    {
      id: 6,
      name: 'Планшет Drawing Pro',
      price: 45990,
      image: 'https://cdn.poehali.dev/projects/ecf5c9ad-237f-4500-8e42-7e2898e88ad8/files/d2defdb9-2c10-4a45-9c8a-86b144477acb.jpg',
      category: 'computers',
      rating: 4.9,
      reviews: 78,
      inStock: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3x3' },
    { id: 'audio', name: 'Аудио', icon: 'Headphones' },
    { id: 'wearables', name: 'Носимые устройства', icon: 'Watch' },
    { id: 'computers', name: 'Компьютеры', icon: 'Laptop' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Icon name="ShoppingBag" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">TechStore</h1>
                <p className="text-xs text-muted-foreground">Электроника премиум-класса</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                <Icon name="Search" size={18} className="text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Поиск товаров..." 
                  className="border-0 bg-transparent w-64 focus-visible:ring-0"
                />
              </div>

              <Button
                variant="outline"
                size="icon"
                className="relative rounded-full"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <Icon name="ShoppingCart" size={20} />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8">
        <section className="mb-12">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-12 md:p-16">
            <div className="relative z-10 max-w-2xl">
              <Badge className="mb-4">🎉 Новая коллекция</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Премиум электроника
                <br />
                <span className="text-primary">для вашей жизни</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Откройте мир инноваций с нашими продуктами высочайшего качества
              </p>
              <Button size="lg" className="rounded-full px-8">
                <Icon name="TrendingUp" className="mr-2" size={20} />
                Смотреть новинки
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex gap-3 overflow-x-auto pb-4">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full whitespace-nowrap"
              >
                <Icon name={category.icon} className="mr-2" size={18} />
                {category.name}
              </Button>
            ))}
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden border-2 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.inStock && (
                    <Badge className="absolute top-4 left-4 bg-green-500">
                      В наличии
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} отзывов)
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-3 line-clamp-2">{product.name}</h3>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                    <Button
                      onClick={() => addToCart(product)}
                      className="rounded-full"
                    >
                      <Icon name="ShoppingCart" className="mr-2" size={18} />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsCartOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl animate-slide-in-right"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold">Корзина</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsCartOpen(false)}
                  >
                    <Icon name="X" size={24} />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {cartItemsCount} {cartItemsCount === 1 ? 'товар' : 'товаров'}
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <Icon name="ShoppingCart" size={64} className="text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Корзина пуста</h3>
                    <p className="text-muted-foreground">Добавьте товары для оформления заказа</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <Card key={item.id}>
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1 line-clamp-2">{item.name}</h4>
                              <p className="text-lg font-bold text-primary mb-2">
                                {item.price.toLocaleString('ru-RU')} ₽
                              </p>
                              <div className="flex items-center gap-2">
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Icon name="Minus" size={14} />
                                </Button>
                                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Icon name="Plus" size={14} />
                                </Button>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-8 w-8 ml-auto"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Icon name="Trash2" size={14} />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t bg-muted/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Итого:</span>
                    <span className="text-2xl font-bold text-primary">
                      {cartTotal.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <Button size="lg" className="w-full rounded-full">
                    <Icon name="CreditCard" className="mr-2" size={20} />
                    Оформить заказ
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

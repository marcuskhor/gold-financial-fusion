import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const Blog = () => {
  // Placeholder blog posts
  const blogPosts = [
    {
      id: 1,
      title: "5 Key Strategies for Future-Proofing Your Investment Portfolio",
      excerpt: "Learn how to build a resilient investment strategy that can weather market volatility and deliver consistent returns.",
      category: "Investment Strategy",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Risk Management in Modern Financial Planning",
      excerpt: "Explore comprehensive risk assessment techniques and mitigation strategies for today's complex financial landscape.",
      category: "Risk Management",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "Tax Optimization Strategies for High-Net-Worth Individuals",
      excerpt: "Discover advanced tax planning techniques that can significantly reduce your tax burden while maximizing wealth accumulation.",
      category: "Tax Planning",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "The Future of Financial Technology: What Investors Need to Know",
      excerpt: "Stay ahead of the curve with insights into emerging fintech trends and their impact on investment strategies.",
      category: "Technology",
      author: "David Thompson",
      date: "February 28, 2024",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "Building Wealth Through Strategic Business Investments",
      excerpt: "Learn how to evaluate and invest in business opportunities that align with your long-term financial goals.",
      category: "Business",
      author: "Sarah Johnson",
      date: "February 20, 2024",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 6,
      title: "International Diversification: Expanding Your Investment Horizon",
      excerpt: "Explore the benefits and considerations of global investment strategies for portfolio diversification.",
      category: "International",
      author: "Michael Chen",
      date: "February 15, 2024",
      readTime: "6 min read",
      featured: false
    }
  ];

  const categories = ["All", "Investment Strategy", "Risk Management", "Tax Planning", "Technology", "Business", "International"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Financial <span className="text-transparent bg-gradient-gold bg-clip-text">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest insights, strategies, and trends in financial planning 
            and investment management from our expert team.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post) => (
        <section key={post.id} className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Badge className="mb-4">Featured Article</Badge>
              <h2 className="text-2xl font-semibold text-muted-foreground">Latest Insight</h2>
            </div>
            
            <Card className="max-w-4xl mx-auto hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl lg:text-3xl leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Button asChild>
                  <Link to={`/blog/${post.id}`}>
                    Read Full Article
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* Category Filter */}
      <section className="py-8 bg-dark-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <TrendingUp size={16} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-1" size={14} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24 bg-gradient-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive weekly financial insights, market updates, 
            and exclusive content from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
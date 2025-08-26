import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Brain, Palette, Code, Users, Globe, Lock, Sparkles, CheckCircle, Star, Database, Server, GitBranch, Monitor, Smartphone, Cloud } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#enterprise" className="text-slate-300 hover:text-white transition-colors">Enterprise</a>
              <a href="#security" className="text-slate-300 hover:text-white transition-colors">Privacy</a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                Start Building
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-20">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border-cyan-500/20">
              <Shield className="w-4 h-4 mr-2" />
              Privacy-First Development Platform
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              Build the Future
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                in Record Time
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most advanced AI-powered development platform that protects your ideas while delivering
              award-winning products with unmatched speed, quality, and luxury user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-lg px-8 py-4 h-auto">
                <Brain className="mr-2 w-5 h-5" />
                Start with AI Chat
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-4 h-auto">
                <Palette className="mr-2 w-5 h-5" />
                Open Design Studio
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                End-to-End Encryption
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                No Vendor Lock-in
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                Enterprise Security
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                Award-Winning Design
              </div>
            </div>
          </div>
        </div>

        {/* Floating Demo Cards */}
        <div className="absolute bottom-20 left-10 hidden lg:block">
          <Card className="w-80 bg-slate-900/80 backdrop-blur-xl border-slate-700">
            <CardHeader>
              <CardTitle className="text-cyan-400 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                AI Code Generation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-950 rounded p-3 font-mono text-sm text-green-400">
                <div>$ nexus create "e-commerce dashboard"</div>
                <div className="text-slate-500">✨ Generating React components...</div>
                <div className="text-slate-500">🎨 Applying luxury design system...</div>
                <div className="text-slate-500">🔒 Implementing secure auth...</div>
                <div className="text-cyan-400">✅ Ready in 15 seconds</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="absolute bottom-32 right-10 hidden lg:block">
          <Card className="w-72 bg-slate-900/80 backdrop-blur-xl border-slate-700">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Privacy Shield
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Data Encryption</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Code Protection</span>
                  <span className="text-green-400">Secured</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Idea Safeguard</span>
                  <span className="text-green-400">Enabled</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Everything You Need,
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                {" "}Nothing You Don't
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Combine the power of AI, design tools, collaboration, and enterprise security
              in one comprehensive platform that protects your intellectual property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Development",
                description: "Chat with our advanced AI to generate full-stack applications, from idea to deployment, in minutes.",
                color: "from-cyan-400 to-blue-500"
              },
              {
                icon: Palette,
                title: "Visual Design Studio",
                description: "Professional design tools with luxury component libraries and real-time collaboration.",
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: Code,
                title: "Code Editor Supreme",
                description: "Advanced IDE with AI suggestions, refactoring, and intelligent code completion.",
                color: "from-green-400 to-emerald-500"
              },
              {
                icon: Shield,
                title: "Privacy Fortress",
                description: "End-to-end encryption, secure code storage, and complete data sovereignty.",
                color: "from-orange-400 to-red-500"
              },
              {
                icon: Zap,
                title: "Lightning Deployment",
                description: "One-click deployment to global edge networks with automatic optimization.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: Users,
                title: "Elite Collaboration",
                description: "Enterprise-grade team features with advanced permissions and audit trails.",
                color: "from-indigo-400 to-purple-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Showcase */}
      <section className="py-24 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              One Platform,
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                {" "}Unlimited Possibilities
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From AI-powered code generation to enterprise deployment, NEXUS provides
              everything you need in a single, integrated environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Integrated Database</h3>
                  <p className="text-slate-400">Built-in database with automatic scaling, backup, and enterprise-grade security. No setup required.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GitBranch className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Version Control</h3>
                  <p className="text-slate-400">Advanced Git integration with AI-powered merge conflict resolution and automated testing.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Preview</h3>
                  <p className="text-slate-400">Instant preview across all devices with hot reload and collaborative editing.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Global Deployment</h3>
                  <p className="text-slate-400">Deploy to 200+ edge locations worldwide with automatic CDN and performance optimization.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-8">
                <div className="bg-slate-950 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="font-mono text-sm text-green-400">
                    <div className="text-cyan-400">nexus@ai:~$ create-app my-startup</div>
                    <div className="text-slate-500">🚀 Initializing project...</div>
                    <div className="text-slate-500">📦 Installing dependencies...</div>
                    <div className="text-slate-500">🎨 Generating components...</div>
                    <div className="text-slate-500">🔐 Setting up authentication...</div>
                    <div className="text-slate-500">🌐 Configuring deployment...</div>
                    <div className="text-green-400">✅ Project ready!</div>
                  </div>
                </div>
                <div className="text-center">
                  <Badge className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border-cyan-500/20">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Ready in 30 seconds
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Choose Your
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                {" "}Power Level
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From individual developers to enterprise teams, we have the perfect plan
              to accelerate your development workflow.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-slate-800/50 border-slate-700 relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white mb-2">Starter</CardTitle>
                <CardDescription className="text-slate-400">Perfect for individual developers</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$0</span>
                  <span className="text-slate-400 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "5 AI-generated projects",
                    "Basic design components",
                    "Community support",
                    "Public deployments",
                    "1 team member"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white mt-6">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gradient-to-b from-slate-800/70 to-slate-800/50 border-cyan-500/50 relative transform scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white mb-2">Pro</CardTitle>
                <CardDescription className="text-slate-400">For serious developers and small teams</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$29</span>
                  <span className="text-slate-400 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Unlimited AI projects",
                    "Premium design system",
                    "Priority support",
                    "Private deployments",
                    "5 team members",
                    "Advanced analytics",
                    "Custom domains"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white mt-6">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-slate-800/50 border-slate-700 relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white mb-2">Enterprise</CardTitle>
                <CardDescription className="text-slate-400">For large teams and organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Everything in Pro",
                    "Unlimited team members",
                    "SSO & SAML integration",
                    "Advanced security controls",
                    "Dedicated support",
                    "Custom integrations",
                    "SLA guarantee"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white mt-6">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 mb-4">All plans include our privacy-first guarantee and enterprise-grade security.</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                99.99% Uptime SLA
              </div>
              <div className="flex items-center">
                <Lock className="w-4 h-4 mr-2" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                Global Infrastructure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-400">
              Join thousands of developers and teams building the future with NEXUS
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CTO, TechCorp",
                content: "NEXUS transformed our development workflow. We're shipping features 10x faster while maintaining enterprise security.",
                rating: 5
              },
              {
                name: "Marcus Rodriguez",
                role: "Lead Developer, StartupX",
                content: "The privacy-first approach and AI capabilities are unmatched. Our ideas are safe and our productivity is through the roof.",
                rating: 5
              },
              {
                name: "Dr. Emily Watson",
                role: "Research Director, InnovateLab",
                content: "Award-winning design meets cutting-edge technology. NEXUS is the future of software development.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join the revolution of privacy-first, AI-powered development.
            Your ideas deserve the best protection and the fastest execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 h-auto">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>

            <div className="flex space-x-8 text-slate-400">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#security" className="hover:text-white transition-colors">Security</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
            <p>&copy; 2024 NEXUS. All rights reserved. Built with privacy, designed for excellence.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

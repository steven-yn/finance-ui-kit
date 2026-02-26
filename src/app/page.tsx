import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Search,
  MapPin,
  Star,
  ArrowRight,
  Plane,
  Calendar,
  Users,
  Heart,
  Clock,
  Thermometer,
  Camera,
  Compass,
  Globe,
  ChevronRight,
  Wifi,
  Shield,
  Headphones,
} from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    rating: 4.9,
    reviews: 3241,
    price: 1299,
    duration: "7 days",
    badge: "Trending",
    badgeColor: "bg-cta text-cta-foreground",
    gradient: "from-blue-400 to-cyan-500",
    temp: "26°C",
    category: "Beach",
  },
  {
    id: 2,
    name: "Kyoto",
    country: "Japan",
    rating: 4.8,
    reviews: 5102,
    price: 1899,
    duration: "10 days",
    badge: "Popular",
    badgeColor: "bg-primary text-primary-foreground",
    gradient: "from-pink-400 to-rose-500",
    temp: "18°C",
    category: "Culture",
  },
  {
    id: 3,
    name: "Patagonia",
    country: "Argentina",
    rating: 4.7,
    reviews: 1823,
    price: 2499,
    duration: "14 days",
    badge: "Adventure",
    badgeColor: "bg-green-500 text-white",
    gradient: "from-teal-500 to-emerald-600",
    temp: "12°C",
    category: "Hiking",
  },
  {
    id: 4,
    name: "Marrakech",
    country: "Morocco",
    rating: 4.6,
    reviews: 2410,
    price: 899,
    duration: "5 days",
    badge: "Best Value",
    badgeColor: "bg-amber-500 text-white",
    gradient: "from-orange-400 to-amber-500",
    temp: "28°C",
    category: "Culture",
  },
  {
    id: 5,
    name: "Maldives",
    country: "Maldives",
    rating: 4.9,
    reviews: 4087,
    price: 3299,
    duration: "8 days",
    badge: "Luxury",
    badgeColor: "bg-violet-500 text-white",
    gradient: "from-sky-400 to-blue-500",
    temp: "30°C",
    category: "Beach",
  },
  {
    id: 6,
    name: "Banff",
    country: "Canada",
    rating: 4.8,
    reviews: 2998,
    price: 1599,
    duration: "6 days",
    badge: "Scenic",
    badgeColor: "bg-primary text-primary-foreground",
    gradient: "from-blue-500 to-indigo-600",
    temp: "8°C",
    category: "Nature",
  },
]

const categories = [
  { name: "Beaches", icon: Globe, count: 248, color: "text-sky-600 bg-sky-100" },
  { name: "Culture", icon: Camera, count: 183, color: "text-violet-600 bg-violet-100" },
  { name: "Adventure", icon: Compass, count: 127, color: "text-green-600 bg-green-100" },
  { name: "City Trips", icon: MapPin, count: 312, color: "text-primary bg-primary/10" },
]

const travelPerks = [
  { icon: Shield, title: "Safe Travel", desc: "Verified guides & operators" },
  { icon: Headphones, title: "24/7 Support", desc: "Real-time trip assistance" },
  { icon: Wifi, title: "Stay Connected", desc: "Free eSIM on every booking" },
  { icon: Heart, title: "Curated Picks", desc: "Hand-selected experiences" },
]

const upcomingTrip = {
  destination: "Santorini, Greece",
  date: "Mar 15 – Mar 22",
  travelers: 2,
  status: "Confirmed",
  daysLeft: 17,
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`size-3.5 ${
            i <= Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted-foreground"
          }`}
        />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Plane className="size-4" />
            </div>
            <span className="text-xl font-bold tracking-tight">Wandr</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            {["Explore", "Packages", "My Trips", "Guides"].map((item) => (
              <a key={item} href="#" className="transition-colors hover:text-foreground">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="size-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="size-4" />
            </Button>
            <Button size="sm" className="gap-2">
              <span>Sign In</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 space-y-20">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-cta/10 px-8 py-16 md:px-16 md:py-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 size-96 -translate-y-1/2 rounded-full bg-sky-300/20 blur-3xl" />
            <div className="absolute right-0 bottom-0 size-80 translate-x-1/3 translate-y-1/3 rounded-full bg-cta/15 blur-3xl" />
          </div>

          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Compass className="size-3.5" />
              500,000+ travelers trust Wandr
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Your Next
              <br />
              <span className="text-primary">Adventure</span> Awaits
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover breathtaking destinations, curated itineraries, and unforgettable
              experiences. Start your journey today.
            </p>

            {/* Search Bar */}
            <div className="flex flex-col gap-3 rounded-2xl border bg-card p-3 shadow-lg sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-3 px-2">
                <MapPin className="size-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Where to?</span>
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <div className="flex flex-1 items-center gap-3 px-2">
                <Calendar className="size-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Pick dates</span>
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <div className="flex flex-1 items-center gap-3 px-2">
                <Users className="size-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">2 travelers</span>
              </div>
              <Button size="lg" className="gap-2 bg-cta text-cta-foreground hover:bg-cta/90 shrink-0">
                <Search className="size-4" />
                Search
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>Popular:</span>
              {["Paris", "Bali", "Tokyo", "New York"].map((city) => (
                <Button key={city} variant="outline" size="xs">
                  {city}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Upcoming Trip Banner ── */}
        <section>
          <Card className="overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="py-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/20">
                    <Plane className="size-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-primary-foreground/70 uppercase tracking-widest mb-0.5">
                      Upcoming Trip
                    </p>
                    <p className="font-semibold text-lg leading-tight">{upcomingTrip.destination}</p>
                    <div className="flex items-center gap-3 mt-1 text-sm text-primary-foreground/80">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" /> {upcomingTrip.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="size-3.5" /> {upcomingTrip.travelers} travelers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold">{upcomingTrip.daysLeft}</p>
                    <p className="text-xs text-primary-foreground/70">days to go</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="rounded-full bg-green-400/20 px-3 py-1 text-xs font-semibold text-green-300">
                      {upcomingTrip.status}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-1"
                    >
                      View Details <ChevronRight className="size-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Categories ── */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Browse by Type</h2>
              <p className="text-sm text-muted-foreground">Find your kind of escape</p>
            </div>
            <Button variant="ghost" size="sm" className="gap-1">
              All categories <ArrowRight className="size-3.5" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map(({ name, icon: Icon, count, color }) => (
              <Card
                key={name}
                className="group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="flex flex-col items-center gap-3 py-8 text-center">
                  <div className={`flex size-12 items-center justify-center rounded-xl ${color}`}>
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-xs text-muted-foreground">{count} destinations</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Featured Destinations ── */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Featured Destinations</h2>
              <p className="text-sm text-muted-foreground">Handpicked for this season</p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">All</Button>
              <Button variant="outline" size="sm">Beach</Button>
              <Button variant="ghost" size="sm">Adventure</Button>
              <Button variant="ghost" size="sm">Culture</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <Card
                key={dest.id}
                className="group overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`relative h-44 bg-gradient-to-br ${dest.gradient} flex items-center justify-center`}
                >
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-white/20 shadow-sm backdrop-blur-sm">
                    <Globe className="size-8 text-white" />
                  </div>
                  <span
                    className={`absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-semibold ${dest.badgeColor}`}
                  >
                    {dest.badge}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="absolute left-3 top-3 bg-white/70 backdrop-blur-sm hover:bg-white"
                  >
                    <Heart className="size-3.5 text-muted-foreground" />
                  </Button>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-sm">
                    <Thermometer className="size-3 text-white" />
                    <span className="text-xs font-medium text-white">{dest.temp}</span>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-base">
                    <span>{dest.name}</span>
                    <span className="text-sm font-normal text-muted-foreground">{dest.country}</span>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <StarRating rating={dest.rating} />
                      <span className="text-xs">
                        {dest.rating} ({dest.reviews.toLocaleString()})
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-xs">
                      <Clock className="size-3" />
                      {dest.duration}
                    </span>
                  </CardDescription>
                </CardHeader>

                <CardFooter className="pt-0 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">from </span>
                    <span className="text-lg font-bold text-foreground">${dest.price}</span>
                    <span className="text-xs text-muted-foreground"> / person</span>
                  </div>
                  <Button size="sm" className="gap-1.5 bg-cta text-cta-foreground hover:bg-cta/90">
                    Explore
                    <ArrowRight className="size-3.5" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Travel Perks ── */}
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {travelPerks.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ── CTA Banner ── */}
        <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 px-8 py-14 text-primary-foreground md:px-16">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-primary-foreground/70 uppercase tracking-widest">
                Limited Offer
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                First trip 20% off.
                <br />
                Use code <strong>WANDER20</strong>
              </h2>
              <p className="text-primary-foreground/80">
                Book any package by March 31st and save instantly.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-cta text-cta-foreground hover:bg-cta/90 shadow-lg gap-2"
              >
                Book Now
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Browse Packages
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="mt-20 border-t bg-card">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Plane className="size-3.5" />
              </div>
              <span className="font-bold">Wandr</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Wandr. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              {["Privacy", "Terms", "Contact"].map((item) => (
                <a key={item} href="#" className="hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

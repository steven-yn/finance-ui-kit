import {
  ArrowRight,
  Calendar,
  Camera,
  ChevronRight,
  Clock,
  Compass,
  Globe,
  Headphones,
  Heart,
  MapPin,
  Plane,
  Search,
  Shield,
  Star,
  Thermometer,
  Users,
  Wifi,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
  {
    name: "Beaches",
    icon: Globe,
    count: 248,
    color: "text-sky-600 bg-sky-100",
  },
  {
    name: "Culture",
    icon: Camera,
    count: 183,
    color: "text-violet-600 bg-violet-100",
  },
  {
    name: "Adventure",
    icon: Compass,
    count: 127,
    color: "text-green-600 bg-green-100",
  },
  {
    name: "City Trips",
    icon: MapPin,
    count: 312,
    color: "text-primary bg-primary/10",
  },
]

const travelPerks = [
  { icon: Shield, title: "Safe Travel", desc: "Verified guides & operators" },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Real-time trip assistance",
  },
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
          className={`size-3.5 ${
            i <= Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted-foreground"
          }`}
          key={i}
        />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* ── Navbar ── */}
      <header className="bg-card/80 sticky top-0 z-50 border-b backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg">
              <Plane className="size-4" />
            </div>
            <span className="text-xl font-bold tracking-tight">Wandr</span>
            <Button>button</Button>
          </div>

          <nav className="text-muted-foreground hidden items-center gap-6 text-sm font-medium md:flex">
            {["Explore", "Packages", "My Trips", "Guides"].map((item) => (
              <a className="hover:text-foreground transition-colors" href="#" key={item}>
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <Search className="size-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <Heart className="size-4" />
            </Button>
            <Button className="gap-2" size="sm">
              <span>Sign In</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-20 px-6 py-10">
        {/* ── Hero ── */}
        <section className="from-primary/10 via-background to-cta/10 relative overflow-hidden rounded-3xl bg-gradient-to-br px-8 py-16 md:px-16 md:py-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 size-96 -translate-y-1/2 rounded-full bg-sky-300/20 blur-3xl" />
            <div className="bg-cta/15 absolute right-0 bottom-0 size-80 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl" />
          </div>

          <div className="max-w-2xl space-y-6">
            <div className="border-primary/20 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium">
              <Compass className="size-3.5" />
              500,000+ travelers trust Wandr
            </div>
            <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-6xl">
              Your Next
              <br />
              <span className="text-primary">Adventure</span> Awaits
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover breathtaking destinations, curated itineraries, and unforgettable
              experiences. Start your journey today.
            </p>

            {/* Search Bar */}
            <div className="bg-card flex flex-col gap-3 rounded-2xl border p-3 shadow-lg sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-3 px-2">
                <MapPin className="text-muted-foreground size-4 shrink-0" />
                <span className="text-muted-foreground text-sm">Where to?</span>
              </div>
              <div className="bg-border hidden h-8 w-px sm:block" />
              <div className="flex flex-1 items-center gap-3 px-2">
                <Calendar className="text-muted-foreground size-4 shrink-0" />
                <span className="text-muted-foreground text-sm">Pick dates</span>
              </div>
              <div className="bg-border hidden h-8 w-px sm:block" />
              <div className="flex flex-1 items-center gap-3 px-2">
                <Users className="text-muted-foreground size-4 shrink-0" />
                <span className="text-muted-foreground text-sm">2 travelers</span>
              </div>
              <Button
                className="bg-cta text-cta-foreground hover:bg-cta/90 shrink-0 gap-2"
                size="lg"
              >
                <Search className="size-4" />
                Search
              </Button>
            </div>

            <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
              <span>Popular:</span>
              {["Paris", "Bali", "Tokyo", "New York"].map((city) => (
                <Button key={city} size="xs" variant="outline">
                  {city}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Upcoming Trip Banner ── */}
        <section>
          <Card className="from-primary to-primary/80 text-primary-foreground overflow-hidden border-0 bg-gradient-to-r">
            <CardContent className="py-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-foreground/20 flex size-12 shrink-0 items-center justify-center rounded-xl">
                    <Plane className="size-6" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/70 mb-0.5 text-xs font-medium tracking-widest uppercase">
                      Upcoming Trip
                    </p>
                    <p className="text-lg leading-tight font-semibold">
                      {upcomingTrip.destination}
                    </p>
                    <div className="text-primary-foreground/80 mt-1 flex items-center gap-3 text-sm">
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
                    <p className="text-primary-foreground/70 text-xs">days to go</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="rounded-full bg-green-400/20 px-3 py-1 text-xs font-semibold text-green-300">
                      {upcomingTrip.status}
                    </span>
                    <Button
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-1"
                      size="sm"
                      variant="outline"
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
              <p className="text-muted-foreground text-sm">Find your kind of escape</p>
            </div>
            <Button className="gap-1" size="sm" variant="ghost">
              All categories <ArrowRight className="size-3.5" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map(({ name, icon: Icon, count, color }) => (
              <Card
                className="group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                key={name}
              >
                <CardContent className="flex flex-col items-center gap-3 py-8 text-center">
                  <div className={`flex size-12 items-center justify-center rounded-xl ${color}`}>
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-muted-foreground text-xs">{count} destinations</p>
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
              <p className="text-muted-foreground text-sm">Handpicked for this season</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary">
                All
              </Button>
              <Button size="sm" variant="outline">
                Beach
              </Button>
              <Button size="sm" variant="ghost">
                Adventure
              </Button>
              <Button size="sm" variant="ghost">
                Culture
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <Card
                className="group overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                key={dest.id}
              >
                <div
                  className={`relative h-44 bg-gradient-to-br ${dest.gradient} flex items-center justify-center`}
                >
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-white/20 shadow-sm backdrop-blur-sm">
                    <Globe className="size-8 text-white" />
                  </div>
                  <span
                    className={`absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-xs font-semibold ${dest.badgeColor}`}
                  >
                    {dest.badge}
                  </span>
                  <Button
                    className="absolute top-3 left-3 bg-white/70 backdrop-blur-sm hover:bg-white"
                    size="icon-sm"
                    variant="ghost"
                  >
                    <Heart className="text-muted-foreground size-3.5" />
                  </Button>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-sm">
                    <Thermometer className="size-3 text-white" />
                    <span className="text-xs font-medium text-white">{dest.temp}</span>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-base">
                    <span>{dest.name}</span>
                    <span className="text-muted-foreground text-sm font-normal">
                      {dest.country}
                    </span>
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

                <CardFooter className="flex items-center justify-between pt-0">
                  <div>
                    <span className="text-muted-foreground text-xs">from </span>
                    <span className="text-foreground text-lg font-bold">${dest.price}</span>
                    <span className="text-muted-foreground text-xs"> / person</span>
                  </div>
                  <Button className="bg-cta text-cta-foreground hover:bg-cta/90 gap-1.5" size="sm">
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
              className="bg-card flex items-center gap-3 rounded-xl border p-4 shadow-sm"
              key={title}
            >
              <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-muted-foreground text-xs">{desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ── CTA Banner ── */}
        <section className="from-primary to-primary/80 text-primary-foreground overflow-hidden rounded-3xl bg-gradient-to-r px-8 py-14 md:px-16">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase">
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
                className="bg-cta text-cta-foreground hover:bg-cta/90 gap-2 shadow-lg"
                size="lg"
              >
                Book Now
                <ArrowRight className="size-4" />
              </Button>
              <Button
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                size="lg"
                variant="outline"
              >
                Browse Packages
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-card mt-20 border-t">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-lg">
                <Plane className="size-3.5" />
              </div>
              <span className="font-bold">Wandr</span>
            </div>
            <p className="text-muted-foreground text-sm">© 2025 Wandr. All rights reserved.</p>
            <div className="text-muted-foreground flex gap-4 text-sm">
              {["Privacy", "Terms", "Contact"].map((item) => (
                <a className="hover:text-foreground transition-colors" href="#" key={item}>
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

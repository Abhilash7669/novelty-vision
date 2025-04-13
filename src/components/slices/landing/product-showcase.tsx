
type Props = object;

export default function ProductShowcase({}: Props) {
  return (
    <section className="relative space-y-12">
        <div className="space-y-4">
            <h3 className="font-neue-montreal font-medium text-4xl text-white">
                Meet Halo
            </h3>
            <p className="text-muted-foreground text-lg leading-6">
            Powering the world&apos;s best product teams, <br />from next-gen startups to established enterprises.
            </p>
        </div>
        <div className="relative w-full min-h-screen rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-10 bg-card"></div>
            <div className="bg-gradient-to-b from-white to-white absolute inset-0 z-0 opacity-20"></div>
        </div>
    </section>  
  )
}
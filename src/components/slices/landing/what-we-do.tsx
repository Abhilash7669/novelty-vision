type Props = object;

export default function WhatWeDo({}: Props) {
  return (
    <section className="flex items-center justify-center w-[92%] xl:w-[76%] mx-auto">
      <div className="flex flex-col xl:flex-row justify-between w-full space-y-2 xl:space-y-0">
        <p className="text-xl xl:sticky xl:top-28 xl:left-0 xl:h-full">What we do?</p>
        <div className="max-w-[80ch] space-y-4">
          <p className="font-neue-montreal text-5xl font-medium">
            We turn everyday infrastructure into powerful media.
          </p>
          <p className="text-xl text-muted-foreground">
            Our eco-conscious digital out-of-home solutions do more than
            advertise. They generate revenue, grow brands, and help keep cities
            clean. Smarter streets create stronger business ecosystems and a
            better urban future for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image"
import { useState } from "react"
import supabaseAdmin from "../config/supabaseClient"


export async function getStaticProps() {
  const { data } = await supabaseAdmin
  .from("images")
  .select("*")
  .order("id")

  return {
    props: {
      images: data,
    }
  }
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}


type Image = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string
}

function Gallery({images} : {images: Image[]}) {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  )
}

export default Gallery


function BlurImage({image}: {image: Image}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    // group Modifier
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt="randoms"
          src={image.imageSrc}
          layout="fill" // deprecated
          objectFit="cover" // deprecated
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
    </a>
  )
}
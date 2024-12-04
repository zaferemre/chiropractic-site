"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative isolate rounded-lg shadow-lg overflow-hidden sm:py-16 m-4">
      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-20 pb-10 px-6 lg:px-8">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Optimal <span className="text-green-600">Health</span>, One Click
            Away
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-8 flex items-center gap-x-4">
            <a
              href="#"
              className="rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Randevu Alın
            </a>
            <Link
              href="/hakkimizda"
              className="text-sm font-semibold text-gray-900 hover:underline"
            >
              Hakkımızda <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Masonry Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt="Image 1"
            />
            <img
              className="h-auto max-w-full rounded-lg sm:block hidden"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt="Image 2"
            />
            <img
              className="h-auto max-w-full rounded-lg "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt="Image 3"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt="Image 4"
            />
            <img
              className="h-auto max-w-full rounded-lg "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt="Image 5"
            />
            <img
              className="h-auto max-w-full rounded-lg sm:block hidden"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt="Image 6"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto max-w-full rounded-lg sm:block hidden"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt="Image 7"
            />
            <img
              className="h-auto max-w-full rounded-lg sm:block hidden"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt="Image 8"
            />
            <img
              className="h-auto max-w-full rounded-lg sm:block hidden"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt="Image 9"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto max-w-full rounded-lg sm:block hidden"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt="Image 10"
            />
            <img
              className="h-auto max-w-full rounded-lg sm:block hidden"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt="Image 11"
            />
            <img
              className="h-auto max-w-full rounded-lg sm:block hidden"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt="Image 12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XuXPsAnWNpf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6">
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/product-1.webp"
            alt="Gallery Image 1"
            width="300"
            height="300"
            className="object-cover w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/product-2.webp"
            alt="Gallery Image 1"
            width="500"
            height="500"
            className="object-cover rounded-lg overflow-hidden"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/product-3.webp"
            alt="Gallery Image 2"
            width="300"
            height="300"
            className="object-cover w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/product-4.webp"
            alt="Gallery Image 2"
            width="500"
            height="500"
            className="object-cover rounded-lg overflow-hidden"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/product-5.webp"
            alt="Gallery Image 3"
            width="300"
            height="300"
            className="object-cover w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/product-1.webp"
            alt="Gallery Image 3"
            width="500"
            height="500"
            className="object-cover rounded-lg overflow-hidden"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/product-6.webp"
            alt="Gallery Image 4"
            width="300"
            height="300"
            className="object-cover w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/product-7.webp"
            alt="Gallery Image 4"
            width="500"
            height="500"
            className="object-cover rounded-lg overflow-hidden"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/product-1.webp"
            alt="Gallery Image 1"
            width="300"
            height="300"
            className="object-cover w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/product-2.webp"
            alt="Gallery Image 1"
            width="500"
            height="500"
            className="object-cover rounded-lg overflow-hidden"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/product-3.webp"
            alt="Gallery Image 2"
            width="300"
            height="300"
            className="object-cover w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/product-4.webp"
            alt="Gallery Image 2"
            width="500"
            height="500"
            className="object-cover rounded-lg overflow-hidden"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/product-5.webp"
            alt="Gallery Image 3"
            width="300"
            height="300"
            className="object-cover w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/product-1.webp"
            alt="Gallery Image 3"
            width="500"
            height="500"
            className="object-cover rounded-lg overflow-hidden"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/product-6.webp"
            alt="Gallery Image 4"
            width="300"
            height="300"
            className="object-cover w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/product-7.webp"
            alt="Gallery Image 4"
            width="500"
            height="500"
            className="object-cover rounded-lg overflow-hidden"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/product-1.webp"
            alt="Gallery Image 1"
            width="300"
            height="300"
            className="object-cover w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/product-2.webp"
            alt="Gallery Image 1"
            width="500"
            height="500"
            className="object-cover rounded-lg overflow-hidden"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/product-3.webp"
            alt="Gallery Image 2"
            width="300"
            height="300"
            className="object-cover w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/product-4.webp"
            alt="Gallery Image 2"
            width="500"
            height="500"
            className="object-cover rounded-lg overflow-hidden"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/product-5.webp"
            alt="Gallery Image 3"
            width="300"
            height="300"
            className="object-cover w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/product-1.webp"
            alt="Gallery Image 3"
            width="500"
            height="500"
            className="object-cover rounded-lg overflow-hidden"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/product-6.webp"
            alt="Gallery Image 4"
            width="300"
            height="300"
            className="object-cover w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/product-7.webp"
            alt="Gallery Image 4"
            width="500"
            height="500"
            className="object-cover rounded-lg overflow-hidden"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
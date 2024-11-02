import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { DetailedHTMLProps, Fragment, ImgHTMLAttributes } from 'react'

export default function ZoomableImage({
    src,
    alt,
    className,
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
    // if (!src) return null
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6"
        // style={{
        //     gridTemplateColumns: "repeat(auto)",
        // }}
        >
            {Array.from({ length: 16 }).map((_, index) => {
                // Atur gambar landscape atau potrait menjadi 2 kolom atau 2 baris secara acak
                const isLandscape = index % 3 === 0; // Sebagai contoh, kita buat tiap gambar ke-3 sebagai landscape

                return (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <div className='relative'>
                                <Image
                                    src={`/gallery/image-${index + 1}.jpeg`}
                                    alt="Gallery Image 1"
                                    width="300"
                                    height="300"
                                    className="object-cover w-full rounded-lg overflow-hidden"
                                    style={{ aspectRatio: "300/300", objectFit: "cover" }}
                                />

                                <div className="absolute bottom-2 left-2 text-xs text-white bg-black/60 px-2 py-1 rounded-xl">
                                    24 Januari 2024
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-7xl border-0 bg-transparent p-0">
                            <div className=" h-[calc(100vh-220px)] w-full overflow-clip rounded-md bg-white shadow-md">
                                <div className="flex ">
                                    <div>
                                        <Image
                                            src={`/gallery/image-${index + 1}.jpeg`}
                                            alt="Gallery Image 1"
                                            width="300"
                                            height="300"
                                            className="object-cover w-full  overflow-hidden"
                                            style={{ objectFit: "cover" }}
                                        />
                                        {/* <Image
                                            src={`/gallery/image-${index + 1}.jpeg`}
                                            // fill
                                            width={500}
                                            height={500}
                                            alt={`Product Image ${index + 1}`}
                                            className="h-full p-4 rounded-md w-full object-contain"
                                        /> */}
                                    </div>
                                    <div>
                                        <div className="">
                                            24 Januari 2024
                                            dasdmakldm
                                        </div>
                                        {/* </div> */}
                                    </div>
                                    <div>
                                        <div className="">
                                            24 Januari 2024
                                            dasdmakldm
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                );
            })}
        </div>

    )
}

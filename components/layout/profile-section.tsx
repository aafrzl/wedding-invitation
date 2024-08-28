import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="flex flex-col items-center justify-center gap-4 px-4 py-14 bg-background overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
        className="flex items-center gap-x-5 border p-4 w-full lg:w-1/2 rounded-xl bg-secondary"
      >
        <div className="size-28 sm:size-52 relative">
          <Image
            src="/bride-profile.png"
            alt="Pipit"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-niconne text-2xl sm:text-6xl text-foreground font-semibold">
            Pipit Siti Solehah
          </h2>
          <p className="font-poppins text-accent text-sm sm:text-base">
            Putri dari <br />
            Bapak Engkos <br />& Ibu Elus Lusmanah
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1, type: "spring" }}
        className="flex flex-row-reverse items-center gap-x-5 border p-4 w-full lg:w-1/2 rounded-xl bg-secondary"
      >
        <div className="size-28 sm:size-52 relative">
          <Image
            src="/groom-profile.png"
            alt="Bubung"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2 text-end">
          <h2 className="font-niconne text-2xl sm:text-6xl text-foreground font-semibold">
            Bubung Saeful Milah
          </h2>
          <p className="font-poppins text-accent text-sm sm:text-base">
            Putra dari <br />
            Bapak Saeful Uyun <br />& Ibu Haeti
          </p>
        </div>
      </motion.div>
    </section>
  );
}

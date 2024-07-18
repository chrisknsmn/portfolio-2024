import { Logo } from "@/public/logo";
export default function Footer() {
  return (
    <footer className="mt-4 p-4 rounded-xl bg-foreground text-background text-center">
      <div className="flex">
        <div className="flex items-center w-full ">
          <div>&copy; Chris Kinsman {new Date().getFullYear()}</div>
        </div>
        <div className="w-full items-center flex justify-end">
          <Logo className="text-background fill-background max-h-[40px]" />
        </div>
      </div>
    </footer>
  );
}

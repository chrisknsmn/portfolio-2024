import { Logo } from "@/public/logo";
export default function Footer() {
  return (
    <footer className="mt-2 p-6 rounded-xl bg-foreground text-background text-center">
      <div className="flex">
        <div className="flex items-center w-full">
          <div>&copy; Chris Kinsman {new Date().getFullYear()}</div>
        </div>
        <div className="items-center flex justify-end">
          <Logo className="text-background fill-background h-[40px]" />
        </div>
      </div>
    </footer>
  );
}

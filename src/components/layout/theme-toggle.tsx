import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "../ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Button
        className={"cursor-pointer"}
        variant={"ghost"}
        onClick={() => {
          isDark ? setTheme("light") : setTheme("dark");
        }}
      >
        {isDark ? (
          <Moon size={16} className="text-muted-foreground" />
        ) : (
          <Sun size={16} className="text-muted-foreground" />
        )}
      </Button>
    </div>
  );
}

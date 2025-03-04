import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function TryPear() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 pt-40 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-semibold" data-aos="fade-up">
            Join the Oppulence Community
          </h1>
          <p
            className="mb-4 text-sm text-gray-500 sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Oppulence is built by developers for developers. Join our vibrant
            community and help shape the future of financial technology.{" "}
            <Link
              href="https://discord.gg/GkmmZyex"
              className="font-medium text-foreground hover:text-primary-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </Link>{" "}
            and talk to us directly! 💬
          </p>
          <p
            className="mb-8 text-sm text-gray-500 sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Help the community out by giving{" "}
            <Link
              href="https://github.com/SolomonAIEngineering/solomonai"
              className="font-medium text-foreground hover:text-primary-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              The repo
            </Link>{" "}
            a star! 🤩
          </p>
          <div className="mx-auto max-w-xs items-center justify-center sm:flex sm:max-w-none sm:space-x-2.5">
            <div data-aos="fade-up" data-aos-delay="400">
              <Button asChild size="lg">
                <Link href="https://github.com/SolomonAIEngineering/solomonai/blob/main/.github/CONTRIBUTING.md">
                  Contributing 101
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

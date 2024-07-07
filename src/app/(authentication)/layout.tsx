import Image from "next/image";
import { Container } from "reactstrap";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="mt-4">
                    <Container>
                        <Image src="/dark-logo.png" alt='logo' width={160} height={57} />
                    </Container>
                </div>
                {children}
            </body>
        </html>
    );
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header"

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="space-y-4">
            <div className="space-y-2">
                <p className="text-label text-muted-foreground uppercase">{title}</p>
                <Separator />
            </div>
            {children}
        </section>
    )
}

function Row({ children, wrap = false }: { children: React.ReactNode; wrap?: boolean }) {
    return (
        <div className={`flex items-center gap-3 ${wrap ? "flex-wrap" : ""}`}>
            {children}
        </div>
    )
}

// ─── Color swatch ─────────────────────────────────────────────────────────────

type SwatchProps = { label: string; hex: string; border?: boolean }

function Swatch({ label, hex, border }: SwatchProps) {
    return (
        <div className="flex flex-col gap-1.5 w-28">
            <div
                className="h-14 rounded-lg"
                style={{
                    backgroundColor: hex,
                    border: border ? "1px solid hsl(var(--border))" : undefined,
                }}
            />
            <p className="text-label text-foreground leading-none">{label}</p>
            <p className="text-label text-muted-foreground leading-none">{hex}</p>
        </div>
    )
}

// ─── Radius swatch ────────────────────────────────────────────────────────────

function RadiusSwatch({ label, radius }: { label: string; radius: string }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div
                className="w-16 h-16 bg-secondary border border-border"
                style={{ borderRadius: radius }}
            />
            <p className="text-label text-muted-foreground">{label}</p>
            <p className="text-label text-foreground">{radius}</p>
        </div>
    )
}

// ─── Spacing swatch ───────────────────────────────────────────────────────────

function SpacingSwatch({ label, px }: { label: string; px: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="bg-primary/30 h-4" style={{ width: px }} />
            <p className="text-label text-muted-foreground">{label}</p>
            <p className="text-label text-foreground">{px}</p>
        </div>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DesignSystem() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Design System</PageHeaderHeading>
                <PageHeaderDescription>
                    Graphite — cool greys, one lime signal. All components, tokens, and type scales in one place.
                </PageHeaderDescription>
            </PageHeader>

            <div className="space-y-12 pb-16">

                {/* ── Colors ─────────────────────────────────────────────── */}
                <Section title="Colors">
                    <Row wrap>
                        <Swatch label="Neutral" hex="#0E1013" />
                        <Swatch label="Surface" hex="#17191C" />
                        <Swatch label="Primary" hex="#ECEDEE" border />
                        <Swatch label="Secondary" hex="#9CA3AF" />
                        <Swatch label="Tertiary" hex="#B4FF39" />
                    </Row>
                </Section>

                {/* ── Typography ─────────────────────────────────────────── */}
                <Section title="Typography">
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <p className="text-label text-muted-foreground">display — Inter Tight 4rem / 600 / −0.03em</p>
                            <p className="font-display">Graphite</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-label text-muted-foreground">h1 — Inter Tight 2.25rem / 600</p>
                            <h1>The quick brown fox</h1>
                        </div>
                        <div className="space-y-1">
                            <p className="text-label text-muted-foreground">h2 — Inter Tight / 600</p>
                            <h2 className="text-2xl">Section heading</h2>
                        </div>
                        <div className="space-y-1">
                            <p className="text-label text-muted-foreground">body — Inter 0.95rem / 1.55</p>
                            <p>
                                Engineering-grade dark palette. Carefully tuned greys across 10 stops,
                                with a single lime-green for focus and CTAs. Reserve it for exactly one
                                action per screen.
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-label text-muted-foreground">label — JetBrains Mono 0.75rem / 0.02em</p>
                            <p className="text-label">STATUS · ACTIVE · v1.0.0</p>
                        </div>
                    </div>
                </Section>

                {/* ── Spacing & Radius ───────────────────────────────────── */}
                <Section title="Spacing & Radius">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div className="space-y-3">
                            <p className="text-label text-muted-foreground">Spacing</p>
                            <div className="space-y-3">
                                <SpacingSwatch label="sm" px="8px" />
                                <SpacingSwatch label="md" px="16px" />
                                <SpacingSwatch label="lg" px="32px" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="text-label text-muted-foreground">Radius</p>
                            <Row>
                                <RadiusSwatch label="sm" radius="6px" />
                                <RadiusSwatch label="md" radius="10px" />
                                <RadiusSwatch label="lg" radius="14px" />
                            </Row>
                        </div>
                    </div>
                </Section>

                {/* ── Buttons ────────────────────────────────────────────── */}
                <Section title="Buttons">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <p className="text-label text-muted-foreground">Variants</p>
                            <Row wrap>
                                <Button variant="default">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="destructive">Destructive</Button>
                                <Button variant="link">Link</Button>
                            </Row>
                        </div>
                        <div className="space-y-2">
                            <p className="text-label text-muted-foreground">Sizes</p>
                            <Row>
                                <Button size="lg">Large</Button>
                                <Button size="default">Default</Button>
                                <Button size="sm">Small</Button>
                            </Row>
                        </div>
                        <div className="space-y-2">
                            <p className="text-label text-muted-foreground">States</p>
                            <Row>
                                <Button disabled>Disabled</Button>
                                <Button variant="outline" disabled>Disabled outline</Button>
                            </Row>
                        </div>
                    </div>
                </Section>

                {/* ── Form Controls ──────────────────────────────────────── */}
                <Section title="Form Controls">
                    <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
                        <div className="space-y-1.5">
                            <label htmlFor="ds-default">Default input</label>
                            <Input id="ds-default" placeholder="Placeholder text" />
                        </div>
                        <div className="space-y-1.5">
                            <label htmlFor="ds-disabled">Disabled</label>
                            <Input id="ds-disabled" placeholder="Disabled" disabled />
                        </div>
                        <div className="space-y-1.5">
                            <label htmlFor="ds-value">With value</label>
                            <Input id="ds-value" defaultValue="Current value" />
                        </div>
                        <div className="space-y-1.5">
                            <label htmlFor="ds-invalid" aria-invalid>Invalid</label>
                            <Input id="ds-invalid" aria-invalid placeholder="Error state" />
                        </div>
                    </div>
                </Section>

                {/* ── Cards ──────────────────────────────────────────────── */}
                <Section title="Cards">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Default card</CardTitle>
                                <CardDescription>Surface background, primary text.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Body copy inside a card inherits Inter from the cascade.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>With footer</CardTitle>
                                <CardDescription>Action anchored to the bottom.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Use exactly one primary CTA per card — the lime rule applies.</p>
                            </CardContent>
                            <CardFooter className="gap-2">
                                <Button size="sm">Confirm</Button>
                                <Button size="sm" variant="ghost">Cancel</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Metadata</CardTitle>
                                <CardDescription>Labels use JetBrains Mono.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-label text-muted-foreground">STATUS</span>
                                    <span className="text-label text-primary">ACTIVE</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-label text-muted-foreground">VERSION</span>
                                    <span className="text-label">v1.0.0</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-label text-muted-foreground">UPDATED</span>
                                    <span className="text-label">2026-05-05</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Section>

                {/* ── Avatar ─────────────────────────────────────────────── */}
                <Section title="Avatar">
                    <Row>
                        <Avatar className="size-10">
                            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                            <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-10">
                            <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-10">
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-6">
                            <AvatarFallback className="text-[10px]">XS</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-14">
                            <AvatarFallback>LG</AvatarFallback>
                        </Avatar>
                    </Row>
                </Section>

                {/* ── Skeleton ───────────────────────────────────────────── */}
                <Section title="Skeleton">
                    <div className="space-y-3 max-w-sm">
                        <div className="flex items-center gap-3">
                            <Skeleton className="size-10 rounded-full" />
                            <div className="space-y-2 flex-1">
                                <Skeleton className="h-3 w-3/4" />
                                <Skeleton className="h-3 w-1/2" />
                            </div>
                        </div>
                        <Skeleton className="h-24 w-full rounded-lg" />
                        <div className="space-y-2">
                            <Skeleton className="h-3 w-full" />
                            <Skeleton className="h-3 w-5/6" />
                            <Skeleton className="h-3 w-4/6" />
                        </div>
                    </div>
                </Section>

                {/* ── Tooltip ────────────────────────────────────────────── */}
                <Section title="Tooltip">
                    <Row>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline">Hover me</Button>
                            </TooltipTrigger>
                            <TooltipContent>This is a tooltip</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm">Ghost trigger</Button>
                            </TooltipTrigger>
                            <TooltipContent>Another tooltip</TooltipContent>
                        </Tooltip>
                    </Row>
                </Section>

                {/* ── Separator ──────────────────────────────────────────── */}
                <Section title="Separator">
                    <div className="space-y-4 max-w-sm">
                        <Separator />
                        <div className="flex items-center h-8 gap-3">
                            <span className="text-label text-muted-foreground">Left</span>
                            <Separator orientation="vertical" />
                            <span className="text-label text-muted-foreground">Right</span>
                        </div>
                    </div>
                </Section>

            </div>
        </>
    )
}

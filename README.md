# The World in One Day — Friday, 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A newspaper front page that sums up the world's news of Friday, 20 November
2026, in one 1024×1024 image. Six stories, each with a picture and a short
headline, under a masthead that names the day.

## The six stories

1. **Lead — Ukraine & Poland:** Russian strikes hit Kyiv bridges — and land
   in Poland. More than 400 drones and 110 missiles in one night; 8 killed.
   Poland calls it a deliberate provocation; NATO calls it a grave violation.
2. **Markets — New York:** AI sell-off hits shares. The S&P 500 falls 3.7%
   on Friday; the Nikkei is down 5.1%.
3. **Disaster — Peru:** Magnitude 6.7 earthquake shakes central Peru. A
   tremor in Junín, felt in Lima; no deaths reported.
4. **Trade — Brussels:** UK and EU strike new trade deals. Youth mobility
   for 100,000 people a year; carbon markets linked from 2028.
5. **Climate — Antalya:** COP31 draft drops fossil-fuel text. As talks reach
   their final day, a $120bn adaptation target is also dropped.
6. **Justice — The Hague:** Myanmar rejects the World Court genocide ruling.
   The day after the court found genocide against the Rohingya, Myanmar's
   government calls it "unfair".

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` to `out/entry.png`. The program uses only the Node
standard library, needs no network, and writes the same bytes on every run.
`entry.png` is a 1024×1024 PNG, under 1 MiB.

## Sources

Stories were checked against reporting published on 20 November 2026 from
Reuters, BBC, CNN, The Times, the Institute for the Study of War, AFP, the
Wall Street Journal, the UN, and the US Geological Survey / USGS earthquake
data. Where reports disagreed on a detail (for example casualty counts in
Kyiv), the image uses the figure reported by more than one outlet, and
avoids figures that only one source gave.

import _ from "lodash"
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function AppBreadcrumb({ paths }: { paths: string[] }) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {paths.map((p: string, i: number) => {
          if (paths.length - 1 === i) {
            return (
              <Typography key={i} color="text.primary">
                {_.capitalize(p)}
              </Typography>
            );
          }
          return (
            <Link key={p} underline="hover" color="inherit" href={`/${p}`}>
              {_.capitalize(p)}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

export const mapFilterType = {
  all: "Все",
  active: "В процессе",
  completed: "Выполненные",
} as const;

export type FilterType = keyof typeof mapFilterType;

export const filterTypes = Object.entries(mapFilterType).map(([value, label]) => ({
  label,
  value: value as FilterType,
}));

import { createFeatureSelector } from '@ngrx/store';
import { coreFeatureKey, CoreState } from './core.reducer';

export const selectCoreState = createFeatureSelector<CoreState>(coreFeatureKey);

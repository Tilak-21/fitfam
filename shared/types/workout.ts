export interface Workout {
  id: string;
  userId: string;
  name: string;
  description?: string;
  exercises: Exercise[];
  createdAt: Date;
  completedAt?: Date;
}

export interface Exercise {
  id: string;
  name: string;
  sets?: number;
  reps?: number;
  duration?: number; // in minutes
  notes?: string;
}

export interface WorkoutPlan {
  id: string;
  userId: string;
  name: string;
  workouts: Workout[];
  createdAt: Date;
}

export interface DailyGoal {
  id: string;
  userId: string;
  date: Date;
  targetWorkouts: number;
  completedWorkouts: number;
  notes?: string;
}

export interface WorkoutLog {
  id: string;
  userId: string;
  workoutId: string;
  date: Date;
  exercises: Exercise[];
  notes?: string;
}

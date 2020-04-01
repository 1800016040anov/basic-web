import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
const routes: Routes = [
	{ 
		path : 'home',
		component: HomeComponent
	},
	{
	path : 'Students',
	component: StudentsComponent
	},
	{
	path : 'teacher',
	component : TeacherComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

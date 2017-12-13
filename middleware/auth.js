export default async function ({store, redirect, route, error}) {
  console.log(store.state.user)
  if (!store.state.user) {
    return redirect('/login')
  }
}

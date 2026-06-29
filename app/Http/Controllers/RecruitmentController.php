<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRecruitmentRequest;
use App\Http\Requests\UpdateRecruitmentRequest;
use App\Mail\RecruitMailValid;
use App\Models\Recruitment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class RecruitmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRecruitmentRequest $request)
    {
        $data = $request->validated();
        $user = Auth::user();

        $user->recruitments()->create($data);

        Mail::to($user)->queue(new RecruitMailValid($user));

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Recruitment $recruitment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Recruitment $recruitment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRecruitmentRequest $request, Recruitment $recruitment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Recruitment $recruitment)
    {
        //
    }
}
